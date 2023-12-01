import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'
import { DropdownItemProvider, useDropdownItemContext } from './DropdownItemContext'
import { DropdownItem } from './types'
import { getIndexByKey, getItemText } from './utils'

export interface ItemProps {
  disabled?: boolean
  value: string
  children: ReactNode
  className?: string
}

export const Item = ({ children, ...props }: ItemProps) => {
  return (
    <DropdownItemProvider>
      <ItemContent {...props}>{children}</ItemContent>
    </DropdownItemProvider>
  )
}

const ItemContent = ({ className, disabled = false, value, children }: ItemProps) => {
  const { multiple, computedItems, selectedItem, selectedItems, getItemProps, highlightedItem } =
    useDropdownContext()

  const { textId } = useDropdownItemContext()

  const index = getIndexByKey(computedItems, value)
  const itemData: DropdownItem = { disabled, value, text: getItemText(children) }

  const isSelected = multiple
    ? selectedItems.some(selectedItem => selectedItem.value === value)
    : selectedItem?.value === value

  return (
    <li
      className={cx(
        highlightedItem?.value === value && 'bg-basic-container',
        isSelected && 'font-bold',
        disabled && 'opacity-dim-3',
        'rounded-sm px-md py-sm text-body-1',
        className
      )}
      key={value}
      {...getItemProps({ item: itemData, index })}
      aria-selected={isSelected}
      aria-labelledby={textId}
    >
      {children}
    </li>
  )
}

Item.id = 'Item'
Item.displayName = 'Dropdown.Item'
