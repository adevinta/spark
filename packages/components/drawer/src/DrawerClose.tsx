import * as RadixDrawer from '@radix-ui/react-dialog'
import { Ref } from 'react'

export type DrawerCloseProps = RadixDrawer.DialogCloseProps & {
  ref?: Ref<HTMLButtonElement>
}

export const DrawerClose = (props: DrawerCloseProps) => <RadixDrawer.Close {...props} />

DrawerClose.displayName = 'Drawer.Close'
