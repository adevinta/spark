import { Slot } from '@spark-ui/slot'
import { mergeProps } from '@zag-js/react'
import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useCollapsibleContext } from './Collapsible'

export interface CollapsibleContentProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

export const Content = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ asChild = false, className, children, ...props }) => {
    const { getContentProps } = useCollapsibleContext()

    const Component = asChild ? Slot : 'div'

    return (
      <Component
        {...mergeProps(getContentProps(), {
          className: cx(
            'overflow-hidden',
            '[&[hidden]]:hidden',
            'data-[state=open]:animate-collapse-in data-[state=closed]:animate-collapse-out',
            className
          ),
          ...props,
        })}
        data-spark-component="collapsible-content"
      >
        {children}
      </Component>
    )
  }
)

Content.displayName = 'Collapsible.Content'
