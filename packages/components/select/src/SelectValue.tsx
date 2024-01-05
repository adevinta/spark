import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useSelectContext } from './SelectContext'

export interface ValueProps {
  children?: ReactNode
  className?: string
  placeholder: string
}

export const Value = forwardRef(
  ({ children, className, placeholder }: ValueProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const { selectedItem } = useSelectContext()

    const hasSelectedItem = !!selectedItem
    const text = selectedItem?.text

    return (
      <span
        role="presentation"
        data-spark-component="select-value"
        ref={forwardedRef}
        className={cx('flex shrink items-center text-left', className)}
      >
        <span className="line-clamp-1 flex-1 overflow-hidden text-ellipsis break-all">
          {!hasSelectedItem ? placeholder : children || text}
        </span>
      </span>
    )
  }
)

Value.displayName = 'Select.Value'
