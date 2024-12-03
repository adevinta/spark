import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useSelectContext } from './SelectContext'

export interface ValueProps {
  children?: ReactNode
  className?: string
}

export const Value = forwardRef(
  ({ children, className }: ValueProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const { selectedItem, placeholder, disabled } = useSelectContext()

    const isPlaceholderSelected = !selectedItem?.value

    return (
      <span
        role="presentation"
        data-spark-component="select-value"
        ref={forwardedRef}
        className={cx('flex shrink items-center text-left', className)}
      >
        <span
          className={cx(
            'line-clamp-1 flex-1 overflow-hidden text-ellipsis break-all',
            isPlaceholderSelected && !disabled && 'text-on-surface/dim-1'
          )}
        >
          {isPlaceholderSelected ? placeholder : children || selectedItem?.text}
        </span>
      </span>
    )
  }
)

Value.displayName = 'Select.Value'
