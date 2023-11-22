import type { FC } from 'react'

import { Dropdown as Root, type DropdownProps } from './Dropdown'
import { DropdownProvider, useDropdown } from './DropdownContext'
import { Item } from './DropdownItem'
import { Items } from './DropdownItems'
import { ItemText } from './DropdownItemText'
import { Trigger } from './DropdownTrigger'

export { useDropdown, DropdownProvider }

export const Dropdown: FC<DropdownProps> & {
  Trigger: typeof Trigger
  Items: typeof Items
  Item: typeof Item
  ItemText: typeof ItemText
} = Object.assign(Root, {
  Trigger,
  Items,
  Item,
  ItemText,
})

Dropdown.displayName = 'Dropdown'
Trigger.displayName = 'Dropdown.Trigger'
Items.displayName = 'Dropdown.Items'
Item.displayName = 'Dropdown.Item'
ItemText.displayName = 'Dropdown.ItemText'
