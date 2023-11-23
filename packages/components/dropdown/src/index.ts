import type { FC } from 'react'

import { Dropdown as Root, type DropdownProps } from './Dropdown'
import { DropdownProvider, useDropdown } from './DropdownContext'
import { Group } from './DropdownGroup'
import { Item } from './DropdownItem'
import { Items } from './DropdownItems'
import { ItemText } from './DropdownItemText'
import { Label } from './DropdownLabel'
import { Popover } from './DropdownPopover'
import { Separator } from './DropdownSeparator'
import { Trigger } from './DropdownTrigger'

export { useDropdown, DropdownProvider }

export const Dropdown: FC<DropdownProps> & {
  Trigger: typeof Trigger
  Items: typeof Items
  Group: typeof Group
  Label: typeof Label
  Item: typeof Item
  ItemText: typeof ItemText
  Separator: typeof Separator
  Popover: typeof Popover
} = Object.assign(Root, {
  Trigger,
  Items,
  Group,
  Label,
  Item,
  ItemText,
  Separator,
  Popover,
})

Dropdown.displayName = 'Dropdown'
Trigger.displayName = 'Dropdown.Trigger'
Items.displayName = 'Dropdown.Items'
Group.displayName = 'Dropdown.Group'
Label.displayName = 'Dropdown.Label'
Item.displayName = 'Dropdown.Item'
ItemText.displayName = 'Dropdown.ItemText'
Separator.displayName = 'Dropdown.Separator'
Popover.displayName = 'Dropdown.Popover'
