import type { FC } from 'react'

import { Select as Root, type SelectProps } from './Select'
import { SelectProvider, useSelectContext } from './SelectContext'
import { Group } from './SelectGroup'
import { Item } from './SelectItem'
import { Items } from './SelectItems'
import { Label } from './SelectLabel'
import { LeadingIcon } from './SelectLeadingIcon'
import { Trigger } from './SelectTrigger'
import { Value } from './SelectValue'

export { useSelectContext, SelectProvider }

export const Select: FC<SelectProps> & {
  Group: typeof Group
  Item: typeof Item
  Items: typeof Items
  Label: typeof Label
  Trigger: typeof Trigger
  Value: typeof Value
  LeadingIcon: typeof LeadingIcon
} = Object.assign(Root, {
  Group,
  Item,
  Items,
  Label,
  Trigger,
  Value,
  LeadingIcon,
})

Select.displayName = 'Select'
Group.displayName = 'Select.Group'
Items.displayName = 'Select.Items'
Item.displayName = 'Select.Item'
Label.displayName = 'Select.Label'
Trigger.displayName = 'Select.Trigger'
Value.displayName = 'Select.Value'
LeadingIcon.displayName = 'Select.LeadingIcon'
