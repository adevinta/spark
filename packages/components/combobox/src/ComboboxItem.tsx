import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { cva, cx } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes, type ReactNode, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'
import { ComboboxItemProvider, useComboboxItemContext } from './ComboboxItemContext'

export interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  disabled?: boolean
  value: string
  children: ReactNode
  className?: string
}

export const Item = forwardRef(
  ({ children, ...props }: ItemProps, forwardedRef: Ref<HTMLLIElement>) => {
    const { value, disabled } = props

    return (
      <ComboboxItemProvider value={value} disabled={disabled}>
        <ItemContent ref={forwardedRef} {...props}>
          {children}
        </ItemContent>
      </ComboboxItemProvider>
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
    const { getItemProps, highlightedItem, lastInteractionType, filteredItemsMap } =
      useComboboxContext()
    const { textId, index, itemData, isSelected } = useComboboxItemContext()

    const isHighlighted = highlightedItem?.value === value

    const isVisible = Array.from(filteredItemsMap).some(([key]) => key === value)

    const { ref: downshiftRef, ...downshiftItemProps } = getItemProps({ item: itemData, index })
    const ref = useMergeRefs(forwardedRef, downshiftRef)

    if (!isVisible) return null

    return (
      <li
        ref={ref}
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
        {...downshiftItemProps}
        aria-selected={isSelected}
        aria-labelledby={textId}
      >
        {children}
      </li>
    )
  }
)

Item.displayName = 'Combobox.Item'
