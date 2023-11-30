import type { FC } from 'react'

import { Dropdown as Root, type DropdownProps } from './Dropdown'
import { DropdownProvider, useDropdownContext } from './DropdownContext'
import { Divider } from './DropdownDivider'
import { Group } from './DropdownGroup'
import { Item } from './DropdownItem'
import { Items } from './DropdownItems'
import { ItemText } from './DropdownItemText'
import { Label } from './DropdownLabel'
import { Popover } from './DropdownPopover'
import { Trigger } from './DropdownTrigger'
import { Value } from './DropdownValue'

export { useDropdownContext, DropdownProvider }

export const Dropdown: FC<DropdownProps> & {
  Group: typeof Group
  Item: typeof Item
  Items: typeof Items
  ItemText: typeof ItemText
  Label: typeof Label
  Popover: typeof Popover
  Divider: typeof Divider
  Trigger: typeof Trigger
  Value: typeof Value
} = Object.assign(Root, {
  Group,
  Item,
  Items,
  ItemText,
  Label,
  Popover,
  Divider,
  Trigger,
  Value,
})

Dropdown.displayName = 'Dropdown'
Group.displayName = 'Dropdown.Group'
Item.displayName = 'Dropdown.Item'
Items.displayName = 'Dropdown.Items'
ItemText.displayName = 'Dropdown.ItemText'
Label.displayName = 'Dropdown.Label'
Popover.displayName = 'Dropdown.Popover'
Divider.displayName = 'Dropdown.Divider'
Trigger.displayName = 'Dropdown.Trigger'
Value.displayName = 'Dropdown.Value'
