import type { FC } from 'react'

import { Popover as Root, type PopoverProps } from './Popover'
import { Anchor } from './PopoverAnchor'
import { Arrow } from './PopoverArrow'
import { CloseButton } from './PopoverCloseButton'
import { Content } from './PopoverContent'
import { Header } from './PopoverHeader'
import { Portal } from './PopoverPortal'
import { Trigger } from './PopoverTrigger'

export const Popover: FC<PopoverProps> & {
  Anchor: typeof Anchor
  Arrow: typeof Arrow
  CloseButton: typeof CloseButton
  Content: typeof Content
  Header: typeof Header
  Portal: typeof Portal
  Trigger: typeof Trigger
} = Object.assign(Root, {
  Anchor,
  Arrow,
  CloseButton,
  Content,
  Header,
  Portal,
  Trigger,
})
