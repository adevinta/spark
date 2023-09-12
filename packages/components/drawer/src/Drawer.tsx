import * as RadixDrawer from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type DrawerProps = RadixDrawer.DialogProps

export const Drawer = ({ children, ...rest }: DrawerProps): ReactElement => (
  <RadixDrawer.Root {...rest}>{children}</RadixDrawer.Root>
)

Drawer.displayName = 'Drawer.Root'
