import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowVerticalLeft } from '@spark-ui/icons/dist/icons/ArrowVerticalLeft'
import { mergeProps } from '@zag-js/react'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { usePagination } from './PaginationContext'

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
  href: string
}

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  href?: undefined
}
export type PrevTriggerProps = Omit<AnchorProps | ButtonProps, 'aria-label'> & {
  'aria-label': string
}

export const PrevTrigger = forwardRef<HTMLButtonElement, PrevTriggerProps>(
  ({ children, className, href, ...props }, ref) => {
    const { pagination } = usePagination()

    // ZagJS props
    const apiProps = pagination.getPrevTriggerProps()

    // Locally managed props
    const localProps = {
      'data-spark-component': 'pagination-prev-trigger',
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
