import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { ArrowDoubleRight } from '@spark-ui/icons/dist/icons/ArrowDoubleRight'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface LastPageTriggerProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode
  className?: string
}

export const LastPageTrigger = forwardRef<HTMLButtonElement, LastPageTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps = pagination.getLastPageTriggerProps()

    // Locally managed props
    const localProps: Partial<IconButtonProps> = {
      intent: 'support',
      design: 'ghost',
      ...props,
      className,
    }

    const mergedProps = mergeProps(apiProps, localProps)

    return (
      <li>
        <IconButton data-spark-component="pagination-last-page-trigger" ref={ref} {...mergedProps}>
          {children || (
            <Icon>
              <ArrowDoubleRight />
            </Icon>
          )}
        </IconButton>
      </li>
    )
  }
)

LastPageTrigger.displayName = 'Pagination.LastPageTrigger'
