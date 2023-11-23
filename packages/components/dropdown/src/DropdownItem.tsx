import { cx } from 'class-variance-authority'

import { useDropdown } from './DropdownContext'
import { getIndexByKey } from './utils'

export interface ItemProps {
  disabled?: boolean
  value: string
  children: string
}

export const Item = ({
  disabled = false,
  value,
  children, // TODO: allow more than string and implement Dropdown.ItemText
}: ItemProps) => {
  const { computedItems, selectedItem, getItemProps, higlightedItem } = useDropdown()

  const index = getIndexByKey(computedItems, value)
  const itemData = { disabled, value, text: children }

  return (
    <li
      className={cx(
        higlightedItem?.value === value && 'bg-basic-container',
        selectedItem?.value === value && 'font-bold',
        disabled && 'opacity-dim-3',
        'flex flex-col px-sm py-sm'
      )}
      key={value}
      {...getItemProps({ item: itemData, index })}
    >
      <span>{children}</span>
    </li>
  )
}

Item.id = 'Item'
Item.displayName = 'Dropdown.Item'
