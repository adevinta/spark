import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

import { DialogProvider } from './DialogContext'

export type RootProps = RadixDialog.DialogProps

export const Root = ({ children, ...rest }: RootProps): ReactElement => (
  <DialogProvider>
    <RadixDialog.Root {...rest}>{children}</RadixDialog.Root>
  </DialogProvider>
)

Root.displayName = 'Dialog.Root'
