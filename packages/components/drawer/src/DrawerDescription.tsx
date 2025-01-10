import * as RadixDrawer from '@radix-ui/react-dialog'
import { RefObject } from 'react'

export type DrawerDescriptionProps = RadixDrawer.DialogDescriptionProps & {
  ref?: RefObject<HTMLParagraphElement>
}

export const DrawerDescription = (props: DrawerDescriptionProps) => (
  <RadixDrawer.Description {...props} />
)

DrawerDescription.displayName = 'Drawer.Description'
