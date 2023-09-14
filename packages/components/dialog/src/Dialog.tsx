import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

import { DialogProvider } from './DialogContext'

export type DialogProps = RadixDialog.DialogProps

export const Dialog = ({ children, ...rest }: DialogProps): ReactElement => (
  <DialogProvider>
    <RadixDialog.Root {...rest}>{children}</RadixDialog.Root>
  </DialogProvider>
)

Dialog.displayName = 'Dialog.Root'
