import * as RadixDrawer from '@radix-ui/react-dialog'
import { ElementRef, forwardRef } from 'react'

export type DescriptionElement = ElementRef<typeof RadixDrawer.Description>
export type DescriptionProps = RadixDrawer.DialogDescriptionProps

export const Description = forwardRef<DescriptionElement, DescriptionProps>((props, ref) => (
  <RadixDrawer.Description ref={ref} {...props} />
))

Description.displayName = 'Drawer.Description'
