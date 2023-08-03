import * as RadixDrawer from '@radix-ui/react-dialog'
import { ElementRef, forwardRef } from 'react'

type CloseElement = ElementRef<typeof RadixDrawer.Close>
export type DrawerCloseProps = RadixDrawer.DialogCloseProps

export const DrawerClose = forwardRef<CloseElement, DrawerCloseProps>((props, ref) => (
  <RadixDrawer.Close ref={ref} {...props} />
))

DrawerClose.displayName = 'Drawer.Close'
