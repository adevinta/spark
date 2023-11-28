import * as RadixDrawer from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export interface DrawerProps {
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

export interface DialogProps {
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?(open: boolean): void
  modal?: boolean
}

export const Drawer = ({ children, ...rest }: DrawerProps): ReactElement => (
  <RadixDrawer.Root {...rest}>{children}</RadixDrawer.Root>
)

Drawer.displayName = 'Drawer.Root'
