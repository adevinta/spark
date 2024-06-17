import { Slot } from '@spark-ui/slot'
import { mergeProps } from '@zag-js/react'
import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useCollapsibleContext } from './Collapsible'

export interface CollapsibleContentProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

export const Content = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const { getContentProps } = useCollapsibleContext()

    const Component = asChild ? Slot : 'div'
    const contentProps = getContentProps()
    const mergedProps = mergeProps(contentProps, {
      className: cx(
        'overflow-hidden',
        'motion-reduce:!animate-none',
        '[&[hidden]]:hidden',
        'data-[state=open]:animate-standalone-collapse-in data-[state=closed]:animate-standalone-collapse-out',
        className
      ),
      ...props,
    })

    return (
      <Component ref={ref} data-spark-component="collapsible-content" {...mergedProps}>
        {children}
      </Component>
    )
  }
)

Content.displayName = 'Collapsible.Content'
