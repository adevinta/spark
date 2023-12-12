import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'
import { DropdownItemProvider, useDropdownItemContext } from './DropdownItemContext'

export interface ItemProps {
  disabled?: boolean
  value: string
  children: ReactNode
  className?: string
}

export const Item = forwardRef(
  ({ children, ...props }: ItemProps, forwardedRef: Ref<HTMLLIElement>) => {
    const { value, disabled } = props

    return (
      <DropdownItemProvider value={value} disabled={disabled}>
        <ItemContent ref={forwardedRef} {...props}>
          {children}
        </ItemContent>
      </DropdownItemProvider>
    )
  }
)

const ItemContent = forwardRef(
  (
    { className, disabled = false, value, children }: ItemProps,
    forwardedRef: Ref<HTMLLIElement>
  ) => {
    const { getItemProps, highlightedItem } = useDropdownContext()

    const { textId, index, itemData, isSelected } = useDropdownItemContext()

    return (
      <li
        ref={forwardedRef}
        className={cx(
          highlightedItem?.value === value && 'bg-surface-hovered',
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
)

Item.displayName = 'Dropdown.Item'
