import { TabsContent as Content } from './TabsContent'
import { TabsList as List } from './TabsList'
import { TabsRoot as Root } from './TabsRoot'
import { TabsTrigger as Trigger } from './TabsTrigger'

Root.displayName = 'Tabs'
Trigger.displayName = 'Tabs.Trigger'
List.displayName = 'Tabs.List'
Content.displayName = 'Tabs.Content'

export const Tabs = Object.assign(Root, {
  List,
  Trigger,
  Content,
})
