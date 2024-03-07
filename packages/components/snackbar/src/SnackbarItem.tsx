import { type AriaToastProps, useToast } from '@react-aria/toast'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type MouseEventHandler,
  type ReactNode,
  useRef,
} from 'react'

import { snackbarItemVariant, type SnackbarItemVariantProps } from './SnackbarItem.styles'
import { useSnackbarItemContext } from './SnackBarItemContext'

export interface SnackbarItemValue extends SnackbarItemVariantProps {
  icon?: ReactNode
  message: ReactNode
}

export interface SnackbarItemProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<AriaToastProps<SnackbarItemValue>, 'toast'>,
    SnackbarItemVariantProps {}

export const SnackbarItem = forwardRef<HTMLDivElement, SnackbarItemProps>(
  (
    {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-details': ariaDetails,
      design: designProp = 'filled',
      intent: intentProp = 'neutral',
      className,
      ...rest
    },
    forwardedRef
  ) => {
    const innerRef = useRef(null)
    const ref = typeof forwardedRef !== 'function' ? forwardedRef || innerRef : innerRef

    const { toast, state } = useSnackbarItemContext()

    const { message } = toast.content
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
        <p className="px-md py-lg text-body-2" {...titleProps}>
          {message}
        </p>

        <IconButton
          size="md"
          shape="rounded"
          {...(intent === 'inverse'
            ? {
                design: 'ghost',
                intent: 'surface',
              }
            : {
                design,
                intent: intent === 'error' ? 'danger' : intent,
              })}
          /**
           * React Spectrum typing of aria-label is inaccurate, and aria-label value should never be undefined.
           * See https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/i18n/src/useLocalizedStringFormatter.ts#L40
           */
          aria-label={closeButtonProps['aria-label'] as string}
          /**
           * onPress event is strongly related to React Spectrum internal APIs,
           * so we need to cast callback type to avoid TS errors.
           */
          onClick={closeButtonProps.onPress as unknown as MouseEventHandler<HTMLButtonElement>}
        >
          <Icon>
            <Close />
          </Icon>
        </IconButton>
      </div>
    )
  }
)

SnackbarItem.displayName = 'Snackbar.Item'
