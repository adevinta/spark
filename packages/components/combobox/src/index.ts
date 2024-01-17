import type { FC } from 'react'

import { Combobox as Root, type ComboboxProps } from './Combobox'
import { ComboboxProvider, useComboboxContext } from './ComboboxContext'
import { Divider } from './ComboboxDivider'
import { Empty } from './ComboboxEmpty'
import { Group } from './ComboboxGroup'
import { Input } from './ComboboxInput'
import { Item } from './ComboboxItem'
import { ItemIndicator } from './ComboboxItemIndicator'
import { Items } from './ComboboxItems'
import { ItemText } from './ComboboxItemText'
import { Label } from './ComboboxLabel'
import { LeadingIcon } from './ComboboxLeadingIcon'
import { Popover } from './ComboboxPopover'
import { Value } from './ComboboxValue'

export { useComboboxContext, ComboboxProvider }

export const Combobox: FC<ComboboxProps> & {
  Group: typeof Group
  Item: typeof Item
  Items: typeof Items
  ItemText: typeof ItemText
  ItemIndicator: typeof ItemIndicator
  Label: typeof Label
  Popover: typeof Popover
  Divider: typeof Divider
  Input: typeof Input
  Value: typeof Value
  LeadingIcon: typeof LeadingIcon
  Empty: typeof Empty
} = Object.assign(Root, {
  Group,
  Item,
  Items,
  ItemText,
  ItemIndicator,
  Label,
  Popover,
  Divider,
  Input,
  Value,
  LeadingIcon,
  Empty,
})

Combobox.displayName = 'Combobox'
Group.displayName = 'Combobox.Group'
Items.displayName = 'Combobox.Items'
Item.displayName = 'Combobox.Item'
ItemText.displayName = 'Combobox.ItemText'
ItemIndicator.displayName = 'Combobox.ItemIndicator'
Label.displayName = 'Combobox.Label'
Popover.displayName = 'Combobox.Popover'
Divider.displayName = 'Combobox.Divider'
Input.displayName = 'Combobox.Input'
Value.displayName = 'Combobox.Value'
LeadingIcon.displayName = 'Combobox.LeadingIcon'
Empty.displayName = 'Combobox.Empty'
