import { Slot } from '@spark-ui/slot'
import { mergeProps } from '@zag-js/react'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useCollapsibleContext } from './Collapsible'

export interface CollapsibleTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean
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
