import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type DialogProps = RadixDialog.DialogProps

export const Dialog = ({ children, ...rest }: DialogProps): ReactElement => (
  <RadixDialog.Root {...rest}>{children}</RadixDialog.Root>
)

Dialog.displayName = 'Dialog.Root'
