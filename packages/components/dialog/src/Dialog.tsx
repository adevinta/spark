import type { FC } from 'react'

import { Body } from './DialogBody'
import { Close } from './DialogClose'
import { CloseButton } from './DialogCloseButton'
import { Content } from './DialogContent'
import { Description } from './DialogDescription' // aria-describedby
import { Footer } from './DialogFooter'
import { Header } from './DialogHeader'
import { Overlay } from './DialogOverlay'
import { Portal } from './DialogPortal'
import { Root, type RootProps } from './DialogRoot'
import { Title } from './DialogTitle' // aria-labelledby
import { Trigger } from './DialogTrigger'

Trigger.displayName = 'Dialog.Trigger'
Portal.displayName = 'Dialog.Portal'
Overlay.displayName = 'Dialog.Overlay'
Content.displayName = 'Dialog.Content'
Header.displayName = 'Dialog.Header'
Body.displayName = 'Dialog.Body'
Footer.displayName = 'Dialog.Footer'
CloseButton.displayName = 'Dialog.CloseButton'
Title.displayName = 'Dialog.Title'
Description.displayName = 'Dialog.Description'

export const Dialog: FC<RootProps> & {
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
