import type { FC } from 'react'

import { Anchor } from './PopoverAnchor'
import { Arrow } from './PopoverArrow'
import { Close } from './PopoverClose'
import { Content } from './PopoverContent'
import { Portal } from './PopoverPortal'
import { Root, type RootProps } from './PopoverRoot'
import { Trigger } from './PopoverTrigger'

Anchor.displayName = 'Popover.Anchor'
Arrow.displayName = 'Popover.Arrow'
Close.displayName = 'Popover.Close'
Content.displayName = 'Popover.Content'
Portal.displayName = 'Popover.Portal'
Trigger.displayName = 'Popover.Trigger'

export const Popover: FC<RootProps> & {
  Anchor: typeof Anchor
  Arrow: typeof Arrow
  Close: typeof Close
  Content: typeof Content
  Portal: typeof Portal
  Trigger: typeof Trigger
} = Object.assign(Root, {
  Anchor,
  Arrow,
  Close,
  Content,
  Portal,
  Trigger,
})
