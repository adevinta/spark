import type { FC } from 'react'

import { Drawer as Root, type DrawerProps } from './Drawer'
import { DrawerBody } from './DrawerBody'
import { DrawerCloseButton } from './DrawerCloseButton'
import { DrawerContent } from './DrawerContent'
import { DrawerDescription } from './DrawerDescription' // aria-describedby
import { DrawerFooter } from './DrawerFooter'
import { DrawerHeader } from './DrawerHeader'
import { DrawerOverlay } from './DrawerOverlay'
import { DrawerPortal } from './DrawerPortal'
import { DrawerTitle } from './DrawerTitle'
import { DrawerTrigger } from './DrawerTrigger'

export { type DrawerProps } from './Drawer'
export { type DrawerContentProps } from './DrawerContent'
export { type DrawerHeaderProps } from './DrawerHeader'
export { type DrawerBodyProps } from './DrawerBody'
export { type DrawerFooterProps } from './DrawerFooter'
export { type DrawerTriggerProps } from './DrawerTrigger'
export { type DrawerOverlayProps } from './DrawerOverlay'
export { type DrawerPortalProps } from './DrawerPortal'
export { type DrawerTitleProps } from './DrawerTitle'
export { type DrawerDescriptionProps } from './DrawerDescription'
export { type DrawerCloseProps } from './DrawerClose'
export { type DrawerCloseButtonProps } from './DrawerCloseButton'

export const Drawer: FC<DrawerProps> & {
  Trigger: typeof DrawerTrigger
  Portal: typeof DrawerPortal
  Overlay: typeof DrawerOverlay
  Content: typeof DrawerContent
  Header: typeof DrawerHeader
  Body: typeof DrawerBody
  Footer: typeof DrawerFooter
  CloseButton: typeof DrawerCloseButton
  Title: typeof DrawerTitle
  Description: typeof DrawerDescription
} = Object.assign(Root, {
  Trigger: DrawerTrigger,
  Portal: DrawerPortal,
  Overlay: DrawerOverlay,
  Content: DrawerContent,
  Header: DrawerHeader,
  Body: DrawerBody,
  Footer: DrawerFooter,
  CloseButton: DrawerCloseButton,
  Title: DrawerTitle,
  Description: DrawerDescription,
})
