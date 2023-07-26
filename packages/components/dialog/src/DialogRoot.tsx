import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type RootProps = RadixDialog.DialogProps

export const Root = ({ children, ...rest }: RootProps): ReactElement => (
  <RadixDialog.Root data-spark-component="dialog" {...rest}>
    {children}
  </RadixDialog.Root>
)

Root.displayName = 'Dialog.Root'
