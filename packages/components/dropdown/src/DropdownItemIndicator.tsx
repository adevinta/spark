import { Check } from '@spark-ui/icons'
import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'
import { useDropdownItemContext } from './DropdownItemContext'

export interface ItemIndicatorProps {
  children?: ReactNode
  className?: string
  label?: string
}

export const ItemIndicator = forwardRef(
  ({ className, children, label }: ItemIndicatorProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const { disabled, isSelected } = useDropdownItemContext()
    const { multiple } = useDropdownContext()
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

ItemIndicator.displayName = 'Dropdown.ItemIndicator'
