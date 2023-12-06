import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'
import { DropdownItemProvider, useDropdownItemContext } from './DropdownItemContext'

export interface ItemProps {
  disabled?: boolean
  value: string
  children: ReactNode
  className?: string
}

export const Item = ({ children, ...props }: ItemProps) => {
  const { value, disabled } = props

  return (
    <DropdownItemProvider value={value} disabled={disabled}>
      <ItemContent {...props}>{children}</ItemContent>
    </DropdownItemProvider>
  )
}

const ItemContent = ({ className, disabled = false, value, children }: ItemProps) => {
  const { getItemProps, highlightedItem } = useDropdownContext()

  const { textId, index, itemData, isSelected } = useDropdownItemContext()

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
