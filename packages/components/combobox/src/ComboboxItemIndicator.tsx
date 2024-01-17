import { Check } from '@spark-ui/icons/dist/icons/Check'
import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'
import { useComboboxItemContext } from './ComboboxItemContext'

export interface ItemIndicatorProps {
  children?: ReactNode
  className?: string
  label?: string
}

export const ItemIndicator = forwardRef(
  ({ className, children, label }: ItemIndicatorProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const { disabled, isSelected } = useComboboxItemContext()
    const { multiple } = useComboboxContext()
    const childElement =
      children || (multiple ? <Check aria-label={label} /> : <span aria-label={label}>✓</span>)

    return (
      <span
        ref={forwardedRef}
        className={cx('flex min-h-sz-16 min-w-sz-16', disabled && 'opacity-dim-3', className)}
      >
        {isSelected && childElement}
      </span>
    )
  }
)

ItemIndicator.displayName = 'Combobox.ItemIndicator'
