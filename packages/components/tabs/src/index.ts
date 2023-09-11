import type { FC } from 'react'

import { Tabs as Root, type TabsProps } from './Tabs'
import { TabsContent as Content } from './TabsContent'
import { TabsList as List } from './TabsList'
import { TabsTrigger as Trigger } from './TabsTrigger'

export const Tabs: FC<TabsProps> & {
  List: typeof List
  Trigger: typeof Trigger
  Content: typeof Content
} = Object.assign(Root, {
  List,
  Trigger,
  Content,
})

export { type TabsContentProps } from './TabsContent'
export { type TabsListProps } from './TabsList'
export { type TabsProps } from './Tabs'
export { type TabsTriggerProps } from './TabsTrigger'
