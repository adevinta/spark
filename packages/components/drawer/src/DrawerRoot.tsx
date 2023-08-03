import * as RadixDrawer from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type RootProps = RadixDrawer.DialogProps

export const Root = ({ children, ...rest }: RootProps): ReactElement => (
  <RadixDrawer.Root {...rest}>{children}</RadixDrawer.Root>
)

Root.displayName = 'Drawer.Root'
