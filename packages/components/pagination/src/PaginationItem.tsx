import { Button, type ButtonProps } from '@spark-ui/button'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface ItemProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode
  value: number
  'aria-label': string
}

export const Item = forwardRef<HTMLButtonElement, ItemProps>(
  ({ children, value, className, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps = pagination.getItemProps({ type: 'page', value })

    // Locally managed props
    const isCurrentPage = apiProps['aria-current'] === 'page'
    const localProps: Partial<ButtonProps> = {
      type: 'button',
      intent: 'support',
      design: isCurrentPage ? 'filled' : 'ghost',
      className,
      ...props,
    }

    const mergedProps = mergeProps(apiProps, localProps)

    return (
      <li>
        <Button data-spark-component="pagination-item" ref={ref} {...mergedProps}>
          {children || value}
        </Button>
      </li>
    )
  }
)

Item.displayName = 'Pagination.Item'
