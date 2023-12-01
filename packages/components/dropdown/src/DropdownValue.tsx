import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'

export interface ValueProps {
  children?: ReactNode
  className?: string
  placeholder: string
}

export const Value = ({ children, className, placeholder }: ValueProps) => {
  const { selectedItem, multiple, selectedItems } = useDropdownContext()

  const hasSelectedItems = !!(multiple ? selectedItems.length : selectedItem)

  const text = multiple ? selectedItems[0]?.text : selectedItem?.text

  return (
    <span className={cx('text-neutral', className)}>
      {!hasSelectedItems ? placeholder : children || text}
    </span>
  )
}

Value.id = 'Value'
Value.displayName = 'Dropdown.Value'
