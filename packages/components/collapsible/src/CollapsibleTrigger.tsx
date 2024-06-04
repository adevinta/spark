import { Slot } from '@spark-ui/slot'
import { mergeProps } from '@zag-js/react'
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from 'react'

import { useCollapsibleContext } from './Collapsible'

interface CollapsibleTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean
  children: ReactNode
  className?: string
}

export const Trigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ asChild = false, children, ...props }) => {
    const { triggerProps } = useCollapsibleContext()

    const Component = asChild ? Slot : 'button'

    return (
      <Component data-spark-component="collapsible-trigger" {...mergeProps(triggerProps, props)}>
        {children}
      </Component>
    )
  }
)

Trigger.displayName = 'Collapsible.Trigger'
