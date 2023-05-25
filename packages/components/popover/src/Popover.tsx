import type { FC } from 'react'

import { Anchor, type AnchorProps } from './PopoverAnchor'
import { Arrow, type ArrowProps } from './PopoverArrow'
import { Content, type ContentProps } from './PopoverContent'
import { Root, type RootProps } from './PopoverRoot'
import { Trigger, type TriggerProps } from './PopoverTrigger'

Trigger.displayName = 'Popover.Trigger'
Anchor.displayName = 'Popover.Anchor'
Arrow.displayName = 'Popover.Arrow'
Content.displayName = 'Popover.Content'

export const Popover: FC<RootProps> & {
  Trigger: FC<TriggerProps>
  Anchor: FC<AnchorProps>
  Arrow: FC<ArrowProps>
  Content: FC<ContentProps>
} = Object.assign(Root, {
  Trigger,
  Anchor,
  Arrow,
  Content,
})
