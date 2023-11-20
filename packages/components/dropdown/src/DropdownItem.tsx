import { cx } from 'class-variance-authority'
import { useEffect } from 'react'

import { useDropdown } from './DropdownContext'
import { getIndexByKey } from './utils'

export const Item = ({
  disabled = false,
  value,
  children, // TODO: allow more than string and implement Dropdown.ItemText
}: {
  disabled?: boolean
  value: string
  children: string
}) => {
  const {
    computedItems,
    selectedItem,
    getItemProps,
    registerItem,
    unregisterItem,
    higlightedItem,
  } = useDropdown()

  const index = getIndexByKey(computedItems, value)
  const itemData = { disabled, value, text: children }

  useEffect(() => {
    registerItem(itemData)

    return () => unregisterItem(value)
  }, [])

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
