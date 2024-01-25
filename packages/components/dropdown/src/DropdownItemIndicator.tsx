import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useDropdownItemContext } from './DropdownItemContext'

export interface ItemIndicatorProps {
  children?: ReactNode
  className?: string
  label?: string
}

export const ItemIndicator = forwardRef(
  ({ className, children, label }: ItemIndicatorProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const { disabled, isSelected } = useDropdownItemContext()

    const childElement = children || (
      <Icon size="sm">
        <Check aria-label={label} />
      </Icon>
    )

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
