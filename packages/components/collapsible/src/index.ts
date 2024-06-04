import type { FC } from 'react'

import { Collapsible as Root, type CollapsibleProps } from './Collapsible'
import { Content } from './CollapsibleContent'
import { Trigger } from './CollapsibleTrigger'

export const Collapsible: FC<CollapsibleProps> & {
  Trigger: typeof Trigger
  Content: typeof Content
} = Object.assign(Root, {
  Trigger,
  Content,
})

Collapsible.displayName = 'Collapsible'
Trigger.displayName = 'Collapsible.Trigger'
Content.displayName = 'Collapsible.Content'
