import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { ArrowDoubleLeft } from '@spark-ui/icons/dist/icons/ArrowDoubleLeft'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface FirstPageTriggerCommonProps {
  children?: ReactNode
  className?: string
  'aria-label': string
}

interface FirstPageTriggerLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

interface FirstPageTriggerButtonProps extends IconButtonProps {
  href?: undefined
}

export type FirstPageTriggerProps = FirstPageTriggerCommonProps &
  (FirstPageTriggerLinkProps | FirstPageTriggerButtonProps)

export const FirstPageTrigger = forwardRef<HTMLButtonElement, FirstPageTriggerProps>(
  ({ children, className, href, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps: any = pagination.getFirstPageTriggerProps()

    // Locally managed props
    const localProps = {
      'data-spark-component': 'pagination-first-page-trigger',
      intent: 'support',
      design: 'ghost',
      ...props,
      className,
    }

    const mergedProps = mergeProps(apiProps, localProps)

    const content = children || (
      <Icon>
        <ArrowDoubleLeft />
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

FirstPageTrigger.displayName = 'Pagination.FirstPageTrigger'
