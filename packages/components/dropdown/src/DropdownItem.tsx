import { cva, cx } from 'class-variance-authority'
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

const styles = cva('px-lg py-md text-body-1', {
  variants: {
    selected: {
      true: 'font-bold',
    },
    disabled: {
      true: 'opacity-dim-3 cursor-not-allowed',
      false: 'cursor-pointer',
    },
    highlighted: {
      true: '',
    },
    interactionType: {
      mouse: '',
      keyboard: '',
    },
  },
  compoundVariants: [
    {
      highlighted: true,
      interactionType: 'mouse',
      class: 'bg-surface-hovered',
    },
    {
      highlighted: true,
      interactionType: 'keyboard',
      class: 'u-ring',
    },
  ],
})

const ItemContent = forwardRef(
  (
    { className, disabled = false, value, children }: ItemProps,
    forwardedRef: Ref<HTMLLIElement>
  ) => {
    const { getItemProps, highlightedItem, lastInteractionType } = useDropdownContext()

    const { textId, index, itemData, isSelected } = useDropdownItemContext()

    const isHighlighted = highlightedItem?.value === value

    return (
      <li
        ref={forwardedRef}
        className={cx(
          styles({
            selected: isSelected,
            disabled,
            highlighted: isHighlighted,
            interactionType: lastInteractionType,
            className,
          })
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
