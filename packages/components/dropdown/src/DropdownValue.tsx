import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'

export interface ValueProps {
  children?: ReactNode
  className?: string
  placeholder?: string
}

export const Value = forwardRef(
  ({ children, className, placeholder }: ValueProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const { selectedItem, multiple, selectedItems } = useDropdownContext()

    const hasSelectedItems = !!(multiple ? selectedItems.length : selectedItem)
    const text = multiple ? selectedItems[0]?.text : selectedItem?.text
    const suffix = selectedItems.length > 1 ? `, +${selectedItems.length - 1}` : ''

    return (
      <span ref={forwardedRef} className={cx('flex shrink items-center text-left', className)}>
        <span
          className={cx(
            'line-clamp-1 flex-1 overflow-hidden text-ellipsis break-all',
            !hasSelectedItems && 'text-on-surface/dim-1'
          )}
        >
          {!hasSelectedItems ? placeholder : children || text}
        </span>
        {suffix && <span>{suffix}</span>}
      </span>
    )
  }
)

Value.displayName = 'Dropdown.Value'
