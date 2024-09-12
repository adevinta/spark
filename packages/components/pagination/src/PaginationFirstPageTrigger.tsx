import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { ArrowDoubleLeft } from '@spark-ui/icons/dist/icons/ArrowDoubleLeft'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface FirstPageTriggerProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode
  className?: string
  'aria-label': string
}

export const FirstPageTrigger = forwardRef<HTMLButtonElement, FirstPageTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps = pagination.getFirstPageTriggerProps()

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
        <IconButton data-spark-component="pagination-first-page-trigger" ref={ref} {...mergedProps}>
          {children || (
            <Icon>
              <ArrowDoubleLeft />
            </Icon>
          )}
        </IconButton>
      </li>
    )
  }
)

FirstPageTrigger.displayName = 'Pagination.FirstPageTrigger'
