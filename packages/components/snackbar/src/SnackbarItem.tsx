import { useToast } from '@react-aria/toast'
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type PropsWithChildren,
  type ReactNode,
  useRef,
} from 'react'

import { snackbarItemVariant, type SnackbarItemVariantProps } from './SnackbarItem.styles'
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
      design: designProp = 'filled',
      intent: intentProp = 'neutral',
      className,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const innerRef = useRef(null)
    const ref = typeof forwardedRef !== 'function' ? forwardedRef || innerRef : innerRef

    const { toast, state } = useSnackbarItemContext()

    const { message, icon, isClosable } = toast.content
    const intent = toast.content.intent ?? intentProp
    const design = toast.content.design ?? designProp

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
        {icon && <SnackbarItemIcon>{icon}</SnackbarItemIcon>}

        <p className="py-lg text-body-2 first:ml-md last:mr-md" {...titleProps}>
          {message}
        </p>

        {children}

        {isClosable && (
          <SnackbarItemClose
            /**
             * React Spectrum typing of aria-label is inaccurate, and aria-label value should never be undefined.
             * See https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/i18n/src/useLocalizedStringFormatter.ts#L40
             */
            aria-label={closeButtonProps['aria-label'] as string}
          />
        )}
      </div>
    )
  }
)

SnackbarItem.displayName = 'Snackbar.Item'
