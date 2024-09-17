import { Button, type ButtonProps } from '@spark-ui/button'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface ItemCommonProps {
  children?: ReactNode
  value: number
  'aria-label': string
}

interface ItemLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

interface ItemButtonProps extends ButtonProps {
  href?: undefined
}

export type ItemProps = ItemCommonProps & (ItemLinkProps | ItemButtonProps)

export const Item = forwardRef<HTMLButtonElement, ItemProps>(
  ({ children, value, className, href, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps = pagination.getItemProps({ type: 'page', value })

    // Locally managed props
    const localProps = {
      'data-spark-component': 'pagination-item',
      intent: 'support',
      design: apiProps['aria-current'] === 'page' ? 'filled' : 'ghost',
      className,
      ...props,
    }

    const mergedProps = mergeProps(apiProps, localProps)

    return (
      <li>
        {href ? (
          <Button ref={ref} {...mergedProps} asChild>
            <a href={href}>{children || value}</a>
          </Button>
        ) : (
          <Button ref={ref} {...mergedProps}>
            {children || value}
          </Button>
        )}
      </li>
    )
  }
)

Item.displayName = 'Pagination.Item'
