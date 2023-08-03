import * as RadixDrawer from '@radix-ui/react-dialog'
import { ElementRef, forwardRef } from 'react'

export type DescriptionElement = ElementRef<typeof RadixDrawer.Description>
export type DrawerDescriptionProps = RadixDrawer.DialogDescriptionProps

export const DrawerDescription = forwardRef<DescriptionElement, DrawerDescriptionProps>(
  (props, ref) => <RadixDrawer.Description ref={ref} {...props} />
)

DrawerDescription.displayName = 'Drawer.Description'
