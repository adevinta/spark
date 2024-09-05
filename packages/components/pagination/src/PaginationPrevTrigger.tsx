import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { ArrowVerticalLeft } from '@spark-ui/icons/dist/icons/ArrowVerticalLeft'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface PrevTriggerProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode
  className?: string
}

export const PrevTrigger = forwardRef<HTMLButtonElement, PrevTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps: any = pagination.getPrevTriggerProps()

    // Locally managed props
    const localProps: Partial<IconButtonProps> = {
      intent: 'support',
      design: 'ghost',
      ...props,
      className,
    }

    const mergedProps: Partial<IconButtonProps> & { 'aria-label': string } = mergeProps(
      apiProps,
      localProps
    )

    return (
      <li>
        <IconButton data-spark-component="pagination-prev-trigger" ref={ref} {...mergedProps}>
          {children || (
            <Icon>
              <ArrowVerticalLeft />
            </Icon>
          )}
        </IconButton>
      </li>
    )
  }
)

PrevTrigger.displayName = 'Pagination.PrevTrigger'
