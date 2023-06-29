import type { FC } from 'react'

import { TabsContent as Content } from './TabsContent'
import { TabsList as List } from './TabsList'
import { TabsRoot as Root, type TabsRootProps } from './TabsRoot'
import { TabsTrigger as Trigger } from './TabsTrigger'

List.displayName = 'Tabs.List'
Trigger.displayName = 'Tabs.Trigger'
Content.displayName = 'Tabs.Content'

export const Tabs: FC<TabsRootProps> & {
  List: typeof List
  Trigger: typeof Trigger
  Content: typeof Content
} = Object.assign(Root, {
  List,
  Trigger,
  Content,
})
