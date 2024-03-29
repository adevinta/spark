/* eslint-disable complexity */
import { useToast } from '@react-aria/toast'
import {
  Children,
  cloneElement,
  type ComponentPropsWithoutRef,
  type FC,
  forwardRef,
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
  useCallback,
  useRef,
} from 'react'

import { snackbarItemVariant, type SnackbarItemVariantProps } from './SnackbarItem.styles'
import { SnackbarItemAction } from './SnackbarItemAction'
import { SnackbarItemClose } from './SnackbarItemClose'
import { useSnackbarItemContext } from './SnackbarItemContext'
import { SnackbarItemIcon } from './SnackbarItemIcon'

export interface SnackbarItemValue extends SnackbarItemVariantProps {
  /**
   * Icon that will be prepended before snackbar message
   */
  icon?: ReactNode
  message: ReactNode
  /**
   * If `true` snackbar will display a close button
   * @default false
   */
  isClosable?: boolean
  /**
   * A label for the action button within the toast.
   */
  actionLabel?: string
  /**
   * Handler that is called when the action button is pressed.
   */
  onAction?: () => void
}

export interface SnackbarItemProps
  extends ComponentPropsWithoutRef<'div'>,
    SnackbarItemVariantProps {
  /**
   * Defines a string value that labels the current element.
   */
  'aria-label'?: string
  /**
   * Identifies the element (or elements) that labels the current element.
   */
  'aria-labelledby'?: string
  /**
   * Identifies the element (or elements) that describes the object.
   */
  'aria-describedby'?: string
  /**
   * Identifies the element (or elements) that provide a detailed, extended description for the object.
   */
  'aria-details'?: string
}

export const SnackbarItem = forwardRef<HTMLDivElement, PropsWithChildren<SnackbarItemProps>>(
  (
    {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-details': ariaDetails,
      design: designProp,
      intent: intentProp,
      className,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const innerRef = useRef(null)
    const ref = typeof forwardedRef !== 'function' ? forwardedRef || innerRef : innerRef

    const { toast, state } = useSnackbarItemContext()

    const { message, icon, isClosable, onAction, actionLabel } = toast.content
    const intent = intentProp ?? toast.content.intent
    const design = designProp ?? toast.content.design

    const ariaProps = {
      ariaLabel,
      ariaLabelledby,
      ariaDescribedby,
      ariaDetails,
    }

    const { toastProps, titleProps, closeButtonProps } = useToast(
      { toast, ...ariaProps },
      state,
      ref
    )

    const findElement = useCallback(
      (elementDisplayName: string): ReactElement | undefined => {
        const childrenArray = Children.toArray(children)

        return childrenArray
          .filter(isValidElement)
          .find(child =>
            (child.type as FC & { displayName?: string }).displayName?.includes(elementDisplayName)
          )
      },
      [children]
    )

    const iconFromChildren = findElement('Snackbar.ItemIcon')
    const actionBtnFromChildren = findElement('Snackbar.ItemAction')
    const closeBtnFromChildren = findElement('Snackbar.ItemClose')

    return (
      <div
        ref={ref}
        {...toastProps}
        {...rest}
        data-animation={toast.animation}
        {...(toast.animation === 'exiting' && {
          // Remove snackbar when the exiting animation completes
          onAnimationEnd: () => state.remove(toast.key),
        })}
        className={snackbarItemVariant({ design, intent, className })}
      >
        {/* 1. ICON */}
        {renderSubComponent(iconFromChildren, icon ? SnackbarItemIcon : null, {
          children: icon,
        })}

        {/* 2. MESSAGE */}
        <p className="px-md py-lg text-body-2" {...titleProps}>
          {message}
        </p>

        {/* 3. ACTION BUTTON */}
        {renderSubComponent(
          actionBtnFromChildren,
          actionLabel && onAction ? SnackbarItemAction : null,
          { intent, design, onClick: onAction, children: actionLabel }
        )}

        {/* 4. CLOSE BUTTON */}
        {renderSubComponent(closeBtnFromChildren, isClosable ? SnackbarItemClose : null, {
          intent,
          design,
          /**
           * React Spectrum typing of aria-label is inaccurate, and aria-label value should never be undefined.
           * See https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/i18n/src/useLocalizedStringFormatter.ts#L40
           */
          'aria-label': closeButtonProps['aria-label'] as string,
        })}
      </div>
    )
  }
)

SnackbarItem.displayName = 'Snackbar.Item'

/**
 * Returns compound item if found in children prop.
 * If not fallbacks to default item, conditionned by addSnackbar options.
 */
const renderSubComponent = <P extends object>(
  childItem?: ReactElement<P>,
  defaultItem?: FC<P> | null,
  props?: P
) => {
  if (childItem) {
    return cloneElement(childItem, { ...props, ...childItem.props })
  } else if (defaultItem) {
    const Item = defaultItem

    return <Item {...(props as P)} />
  } else {
    return null
  }
}
