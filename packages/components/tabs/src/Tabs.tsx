import type { FC } from 'react'

import { TabsContent as Content, type TabsContentProps } from './TabsContent'
import { TabsList as List, type TabsListProps } from './TabsList'
import { TabsRoot as Root, type TabsRootProps } from './TabsRoot'
import { TabsTrigger as Trigger, type TabsTriggerProps } from './TabsTrigger'

export const Tabs: FC<TabsRootProps> & {
  List: FC<TabsListProps>
  Trigger: FC<TabsTriggerProps>
  Content: FC<TabsContentProps>
} = Object.assign(Root, {
  List,
  Trigger,
  Content,
})
