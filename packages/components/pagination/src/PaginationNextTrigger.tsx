import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { ArrowVerticalRight } from '@spark-ui/icons/dist/icons/ArrowVerticalRight'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface NextTriggerProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode
  className?: string
}

export const NextTrigger = forwardRef<HTMLButtonElement, NextTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps = pagination.getNextTriggerProps()

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
        <IconButton data-spark-component="pagination-next-trigger" ref={ref} {...mergedProps}>
          {children || (
            <Icon>
              <ArrowVerticalRight />
            </Icon>
          )}
        </IconButton>
      </li>
    )
  }
)

NextTrigger.displayName = 'Pagination.NextTrigger'
