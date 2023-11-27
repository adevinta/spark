import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'

export interface ValueProps {
  children?: ReactNode
  className?: string
  placeholder: string
}

export const Value = ({ children, className, placeholder }: ValueProps) => {
  const { selectedItem } = useDropdownContext()

  return (
    <span className={cx('text-neutral', className)}>
      {!selectedItem ? placeholder : children || selectedItem?.text}
    </span>
  )
}

Value.id = 'Value'
Value.displayName = 'Dropdown.Value'
