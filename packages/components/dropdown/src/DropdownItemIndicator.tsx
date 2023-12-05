import { Check } from '@spark-ui/icons/dist/icons/Check'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'
import { useDropdownItemContext } from './DropdownItemContext'

export interface ItemIndicatorProps {
  children?: ReactNode
  className?: string
}

export const ItemIndicator = ({ className, children }: ItemIndicatorProps) => {
  const { disabled, isSelected } = useDropdownItemContext()
  const { multiple } = useDropdownContext()
  const childElement = children || (multiple ? <Check /> : '✓')

  return (
    <span className={cx('flex min-h-sz-16 min-w-sz-16', disabled && 'opacity-dim-3', className)}>
      {isSelected && childElement}
    </span>
  )
}

ItemIndicator.id = 'ItemIndicator'
ItemIndicator.displayName = 'Dropdown.ItemIndicator'
