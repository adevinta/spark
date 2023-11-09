import type { FC } from 'react'

import { Select as Root, type SelectProps } from './Select'
import { Item } from './SelectItem'
import { Items } from './SelectItems'
import { ItemsGroup } from './SelectItemsGroup'
import { LeadingIcon } from './SelectLeadingIcon'
import { Trigger } from './SelectTrigger'

export const Select: FC<SelectProps> & {
  Trigger: typeof Trigger
  LeadingIcon: typeof LeadingIcon
  Items: typeof Items
  Item: typeof Item
  ItemsGroup: typeof ItemsGroup
} = Object.assign(Root, {
  Trigger,
  LeadingIcon,
  Items,
  Item,
  ItemsGroup,
})

Select.displayName = 'Select'
Trigger.displayName = 'Select.Trigger'
LeadingIcon.displayName = 'Select.LeadingIcon'
Items.displayName = 'Select.Items'
Item.displayName = 'Select.Item'
ItemsGroup.displayName = 'Select.ItemsGroup'
