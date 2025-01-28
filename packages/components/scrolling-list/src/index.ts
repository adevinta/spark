import { ScrollingList as Root } from './ScrollingList'
import { ScrollingListControls as Controls } from './ScrollingListControls'
import { ScrollingListItem as Item } from './ScrollingListItem'
import { ScrollingListItems as Items } from './ScrollingListItems'
import { ScrollingListSkipButton as SkipButton } from './ScrollingListSkipButton'

export const ScrollingList: typeof Root & {
  Controls: typeof Controls
  Item: typeof Item
  Items: typeof Items
  SkipButton: typeof SkipButton
} = Object.assign(Root, {
  Controls,
  Item,
  Items,
  SkipButton,
})

ScrollingList.displayName = 'ScrollingList'
