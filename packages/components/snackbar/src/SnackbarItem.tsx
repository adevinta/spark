import { type AriaToastProps, useToast } from '@react-aria/toast'
import {
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
  useRef,
} from 'react'

import { useSnackbarItemContext } from './SnackBarItemContext'

export interface SnackbarItemValue {
  icon?: ReactNode
  message: ReactNode
}

export interface SnackbarItemProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<AriaToastProps<SnackbarItemValue>, 'toast'> {}

export const SnackbarItem = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  'aria-details': ariaDetails,
  ...rest
}: SnackbarItemProps): ReactElement => {
  const ref = useRef(null)
  const { toast, state } = useSnackbarItemContext()

  const ariaProps = {
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    ariaDetails,
  }

  const { toastProps, titleProps, closeButtonProps } = useToast({ toast, ...ariaProps }, state, ref)

  return (
    <div {...toastProps} ref={ref} {...rest}>
      <div {...titleProps}>{toast.content.message}</div>
      <button
        /**
         * onPress event is strongly related to React Spectrum internal APIs,
         * so we need to cast callback type to avoid TS errors.
         */
        aria-label={closeButtonProps['aria-label']}
        onClick={closeButtonProps.onPress as unknown as MouseEventHandler<HTMLButtonElement>}
      >
        x
      </button>
    </div>
  )
}

SnackbarItem.displayName = 'Snackbar.Item'
