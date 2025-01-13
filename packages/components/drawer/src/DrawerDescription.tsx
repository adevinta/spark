import * as RadixDrawer from '@radix-ui/react-dialog'
import { Ref } from 'react'

export type DrawerDescriptionProps = RadixDrawer.DialogDescriptionProps & {
  ref?: Ref<HTMLParagraphElement>
}

export const DrawerDescription = (props: DrawerDescriptionProps) => (
  <RadixDrawer.Description {...props} />
)

DrawerDescription.displayName = 'Drawer.Description'
