import * as RadixDrawer from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type DrawerRootProps = RadixDrawer.DialogProps

export const DrawerRoot = ({ children, ...rest }: DrawerRootProps): ReactElement => (
  <RadixDrawer.Root {...rest}>{children}</RadixDrawer.Root>
)

DrawerRoot.displayName = 'Drawer.Root'
