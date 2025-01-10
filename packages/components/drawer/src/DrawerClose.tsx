import * as RadixDrawer from '@radix-ui/react-dialog'
import { RefObject } from 'react'

export type DrawerCloseProps = RadixDrawer.DialogCloseProps & {
  ref?: RefObject<HTMLButtonElement>
}

export const DrawerClose = (props: DrawerCloseProps) => <RadixDrawer.Close {...props} />

DrawerClose.displayName = 'Drawer.Close'
