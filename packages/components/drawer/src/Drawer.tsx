import type { FC } from 'react'

import { Body } from './DrawerBody'
import { Close } from './DrawerClose'
import { CloseButton } from './DrawerCloseButton'
import { Content } from './DrawerContent'
import { Description } from './DrawerDescription' // aria-describedby
import { Footer } from './DrawerFooter'
import { Header } from './DrawerHeader'
import { Overlay } from './DrawerOverlay'
import { Portal } from './DrawerPortal'
import { Root, type RootProps } from './DrawerRoot'
import { Title } from './DrawerTitle' // aria-labelledby
import { Trigger } from './DrawerTrigger'

Trigger.displayName = 'Drawer.Trigger'
Portal.displayName = 'Drawer.Portal'
Overlay.displayName = 'Drawer.Overlay'
Content.displayName = 'Drawer.Content'
Header.displayName = 'Drawer.Header'
Body.displayName = 'Drawer.Body'
Footer.displayName = 'Drawer.Footer'
CloseButton.displayName = 'Drawer.CloseButton'
Title.displayName = 'Drawer.Title'
Description.displayName = 'Drawer.Description'

export const Drawer: FC<RootProps> & {
  Trigger: typeof Trigger
  Portal: typeof Portal
  Overlay: typeof Overlay
  Content: typeof Content
  Header: typeof Header
  Body: typeof Body
  Footer: typeof Footer
  Close: typeof Close
  CloseButton: typeof CloseButton
  Title: typeof Title
  Description: typeof Description
} = Object.assign(Root, {
  Trigger,
  Portal,
  Overlay,
  Content,
  Header,
  Body,
  Footer,
  Close,
  CloseButton,
  Title,
  Description,
})
