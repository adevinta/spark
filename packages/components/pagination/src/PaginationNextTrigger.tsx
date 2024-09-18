import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowVerticalRight } from '@spark-ui/icons/dist/icons/ArrowVerticalRight'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { usePagination } from './PaginationContext'

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  href?: undefined
}
export type NextTriggerProps = Omit<AnchorProps | ButtonProps, 'aria-label'> & {
  'aria-label': string
}

export const NextTrigger = forwardRef<HTMLButtonElement, NextTriggerProps>(
  ({ children, className, href, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps = pagination.getNextTriggerProps()

    // Locally managed props
    const localProps = {
      'data-spark-component': 'pagination-next-trigger',
      intent: 'support',
      design: 'ghost',
      ...props,
      className,
    }

    // We know 'aria-label' is included in props
    type WithAriaLabel = Omit<typeof apiProps, 'aria-label'> & { 'aria-label': string }

    const mergedProps = mergeProps(
      apiProps,
      localProps as unknown as typeof apiProps
    ) as WithAriaLabel

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
