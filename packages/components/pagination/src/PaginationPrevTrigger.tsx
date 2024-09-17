import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { ArrowVerticalLeft } from '@spark-ui/icons/dist/icons/ArrowVerticalLeft'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface PrevTriggerCommonProps {
  children?: ReactNode
  className?: string
  'aria-label': string
}

interface PrevTriggerLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

interface PrevTriggerButtonProps extends IconButtonProps {
  href?: undefined
}

export type PrevTriggerProps = PrevTriggerCommonProps &
  (PrevTriggerLinkProps | PrevTriggerButtonProps)

export const PrevTrigger = forwardRef<HTMLButtonElement, PrevTriggerProps>(
  ({ children, className, href, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps: any = pagination.getPrevTriggerProps()

    // Locally managed props
    const localProps = {
      'data-spark-component': 'pagination-prev-trigger',
      intent: 'support',
      design: 'ghost',
      ...props,
      className,
    }

    const mergedProps = mergeProps(apiProps, localProps)

    const content = children || (
      <Icon>
        <ArrowVerticalLeft />
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

PrevTrigger.displayName = 'Pagination.PrevTrigger'
