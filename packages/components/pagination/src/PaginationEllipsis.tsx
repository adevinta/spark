import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface EllipsisProps {
  children?: ReactNode
  index: number
}

export const Ellipsis = forwardRef<HTMLSpanElement, EllipsisProps>(
  ({ children, index, ...rest }, ref) => {
    const { pagination } = usePagination()
    const props = pagination.getEllipsisProps({ index }) // todo: merge props

    return (
      <li>
        <span
          data-spark-component="pagination-ellipsis"
          ref={ref}
          className={cx('flex size-sz-44 items-center justify-center')}
          {...props}
          {...rest}
        >
          {children || '\u2026'}
        </span>
      </li>
    )
  }
)

Ellipsis.displayName = 'Pagination.Ellipsis'
