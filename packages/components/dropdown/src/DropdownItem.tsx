import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useDropdown } from './DropdownContext'
import { DropdownItem } from './types'
import { getIndexByKey, getItemText } from './utils'

export interface ItemProps {
  disabled?: boolean
  value: string
  children: ReactNode
  className?: string
}

export const Item = ({
  className,
  disabled = false,
  value,
  children, // TODO: allow more than string and implement Dropdown.ItemText
}: ItemProps) => {
  const { computedItems, selectedItem, getItemProps, highlightedItem } = useDropdown()

  const index = getIndexByKey(computedItems, value)
  const itemData: DropdownItem = { disabled, value, text: getItemText(children) }

  return (
    <li
      className={cx(
        highlightedItem?.value === value && 'bg-basic-container',
        selectedItem?.value === value && 'font-bold',
        disabled && 'opacity-dim-3',
        'flex rounded-sm px-md py-sm text-body-1',
        className
      )}
      key={value}
      {...getItemProps({ item: itemData, index })}
    >
      {children}
    </li>
  )
}

Item.id = 'Item'
Item.displayName = 'Dropdown.Item'
