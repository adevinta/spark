import type { FC } from 'react'

import { Anchor, type AnchorProps } from './PopoverAnchor'
import { Content, type ContentProps } from './PopoverContent'
import { Root, type RootProps } from './PopoverRoot'
import { Trigger, type TriggerProps } from './PopoverTrigger'

Trigger.displayName = 'Popover.Trigger'
Anchor.displayName = 'Popover.Anchor'
Content.displayName = 'Popover.Content'

export const Popover: FC<RootProps> & {
  Trigger: FC<TriggerProps>
  Anchor: FC<AnchorProps>
  Content: FC<ContentProps>
} = Object.assign(Root, {
  Trigger,
  Anchor,
  Content,
})
