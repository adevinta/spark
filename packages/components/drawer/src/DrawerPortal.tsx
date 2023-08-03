import * as RadixDrawer from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type PortalProps = RadixDrawer.DialogPortalProps

export const Portal = ({ children, ...rest }: PortalProps): ReactElement => (
  <RadixDrawer.Portal {...rest}>{children}</RadixDrawer.Portal>
)

Portal.displayName = 'Drawer.Portal'
