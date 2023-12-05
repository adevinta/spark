import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

import { DialogProvider } from './DialogContext'

export interface DialogProps {
  /**
   * Children of the component.
   */
  children?: RadixDialog.DialogProps['children']
  /**
   * Specifies if the dialog is open or not.
   */
  open?: RadixDialog.DialogProps['open']
  /**
   * Default open state.
   */
  defaultOpen?: RadixDialog.DialogProps['defaultOpen']
  /**
   * Handler executen on every dialog open state change.
   */
  onOpenChange?: RadixDialog.DialogProps['onOpenChange']
  /**
   * Specifies if the dialog is a modal.
   */
  modal?: RadixDialog.DialogProps['modal']
}

export const Dialog = ({ children, ...rest }: DialogProps): ReactElement => (
  <DialogProvider>
    <RadixDialog.Root {...rest}>{children}</RadixDialog.Root>
  </DialogProvider>
)

Dialog.displayName = 'Dialog.Root'
