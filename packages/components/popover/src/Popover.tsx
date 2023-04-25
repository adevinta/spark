import type { FC } from 'react'

import { Content, type ContentProps } from './PopoverContent'
import { Root, type RootProps } from './PopoverRoot'
import { Trigger, type TriggerProps } from './PopoverTrigger'

Trigger.displayName = 'Popover.Trigger'
Content.displayName = 'Popover.Content'

export const Popover: FC<RootProps> & {
  Trigger: FC<TriggerProps>
  Content: FC<ContentProps>
} = Object.assign(Root, {
  Trigger,
  Content,
})
