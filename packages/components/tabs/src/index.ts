import { TabsContent as Content } from './TabsContent'
import { TabsList as List } from './TabsList'
import { TabsRoot as Root } from './TabsRoot'
import { TabsTrigger as Trigger } from './TabsTrigger'

export const Tabs = Object.assign(Root, {
  List,
  Trigger,
  Content,
})
