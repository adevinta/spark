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
  const { getItemProps, highlightedItem, lastInteractionType } = useDropdownContext()

  const { textId, index, itemData, isSelected } = useDropdownItemContext()

  const isHighlighted = highlightedItem?.value === value

  return (
    <li
      className={cx(
        isHighlighted && (lastInteractionType === 'mouse' ? 'bg-surface-hovered' : 'u-ring'),
        isSelected && 'font-bold',
        disabled && 'opacity-dim-3',
        'px-lg py-md text-body-1',
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
