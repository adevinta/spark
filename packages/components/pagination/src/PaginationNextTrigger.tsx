import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { ArrowVerticalRight } from '@spark-ui/icons/dist/icons/ArrowVerticalRight'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface NextTriggerCommonProps {
  children?: ReactNode
  className?: string
  'aria-label': string
}

interface NextTriggerLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

interface NextTriggerButtonProps extends IconButtonProps {
  href?: undefined
}

export type NextTriggerProps = NextTriggerCommonProps &
  (NextTriggerLinkProps | NextTriggerButtonProps)

export const NextTrigger = forwardRef<HTMLButtonElement, NextTriggerProps>(
  ({ children, className, href, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps: any = pagination.getNextTriggerProps()

    // Locally managed props
    const localProps = {
      'data-spark-component': 'pagination-next-trigger',
      intent: 'support',
      design: 'ghost',
      ...props,
      className,
    }

    const mergedProps = mergeProps(apiProps, localProps)

    const content = children || (
      <Icon>
        <ArrowVerticalRight />
      </Icon>
    )

    return (
      <li>
        {href ? (
          <IconButton ref={ref} {...mergedProps} asChild>
            <a href={href}>{content}</a>
          </IconButton>
        ) : (
          <IconButton ref={ref} {...mergedProps}>
            {content}
          </IconButton>
        )}
      </li>
    )
  }
)

NextTrigger.displayName = 'Pagination.NextTrigger'
