import * as RadixDrawer from '@radix-ui/react-dialog'
import { ElementRef, forwardRef } from 'react'

type CloseElement = ElementRef<typeof RadixDrawer.Close>
export type CloseProps = RadixDrawer.DialogCloseProps

export const Close = forwardRef<CloseElement, CloseProps>((props, ref) => (
  <RadixDrawer.Close ref={ref} {...props} />
))

Close.displayName = 'Drawer.Close'
