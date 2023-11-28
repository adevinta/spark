import type { FC } from 'react'

import { Select as Root, type SelectProps } from './Select'
import { SelectProvider, useSelect } from './SelectContext'
import { Item } from './SelectItem'
import { Items } from './SelectItems'
import { ItemsGroup } from './SelectItemsGroup'
import { LeadingIcon } from './SelectLeadingIcon'
import { Trigger } from './SelectTrigger'
import { Value } from './SelectValue'

export { useSelect, SelectProvider }

export const Select: FC<SelectProps> & {
  Trigger: typeof Trigger
  LeadingIcon: typeof LeadingIcon
  Items: typeof Items
  Item: typeof Item
  ItemsGroup: typeof ItemsGroup
  Value: typeof Value
} = Object.assign(Root, {
  Trigger,
  LeadingIcon,
  Items,
  Item,
  ItemsGroup,
  Value,
})

Select.displayName = 'Select'
Trigger.displayName = 'Select.Trigger'
LeadingIcon.displayName = 'Select.LeadingIcon'
Items.displayName = 'Select.Items'
Item.displayName = 'Select.Item'
ItemsGroup.displayName = 'Select.ItemsGroup'
Value.displayName = 'Select.Value'
