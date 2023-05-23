import * as RadixPopover from '@radix-ui/react-popover'
import { forwardRef } from 'react'

export type TriggerProps = RadixPopover.PopoverTriggerProps

export const Trigger = forwardRef<HTMLDivElement, TriggerProps>(
  ({ asChild = false, children, ...rest }) => (
    <RadixPopover.Trigger data-spark-component="popover-trigger" asChild={asChild} {...rest}>
      {children}
    </RadixPopover.Trigger>
  )
)

Trigger.displayName = 'Popover.Trigger'
