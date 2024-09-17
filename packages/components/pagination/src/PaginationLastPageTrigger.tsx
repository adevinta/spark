import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { ArrowDoubleRight } from '@spark-ui/icons/dist/icons/ArrowDoubleRight'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface LastPageTriggerCommonProps extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode
  className?: string
  'aria-label': string
}

interface LastPageTriggerLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

interface LastPageTriggerButtonProps extends IconButtonProps {
  href?: undefined
}

export type LastPageTriggerProps = LastPageTriggerCommonProps &
  (LastPageTriggerLinkProps | LastPageTriggerButtonProps)

export const LastPageTrigger = forwardRef<HTMLButtonElement, LastPageTriggerProps>(
  ({ children, className, href, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps: any = pagination.getLastPageTriggerProps()

    // Locally managed props
    const localProps = {
      'data-spark-component': 'pagination-last-page-trigger',
      intent: 'support',
      design: 'ghost',
      ...props,
      className,
    }

    const mergedProps = mergeProps(apiProps, localProps)

    const content = children || (
      <Icon>
        <ArrowDoubleRight />
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

LastPageTrigger.displayName = 'Pagination.LastPageTrigger'
