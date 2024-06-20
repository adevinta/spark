import { Slot } from '@spark-ui/slot'
import { mergeProps } from '@zag-js/react'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { useCollapsibleContext } from './Collapsible'

export interface CollapsibleTriggerProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean
}

export const Trigger = forwardRef<HTMLButtonElement, CollapsibleTriggerProps>(
  ({ asChild = false, children, ...props }, ref) => {
    const collapsibleContext = useCollapsibleContext()
    const Component = asChild ? Slot : 'button'
    const mergedProps = mergeProps(collapsibleContext.getTriggerProps(), props)

    return (
      <Component ref={ref} data-spark-component="collapsible-trigger" {...mergedProps}>
        {children}
      </Component>
    )
  }
)

Trigger.displayName = 'Collapsible.Trigger'
