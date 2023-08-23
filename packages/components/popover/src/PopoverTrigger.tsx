import * as RadixPopover from '@radix-ui/react-popover'
import { type ElementRef, forwardRef } from 'react'

type TriggerElement = ElementRef<typeof RadixPopover.Trigger>
export type TriggerProps = RadixPopover.PopoverTriggerProps

export const Trigger = forwardRef<TriggerElement, TriggerProps>(
  ({ asChild = false, children, ...rest }, ref) => (
    <RadixPopover.Trigger
      data-spark-component="popover-trigger"
      ref={ref}
      asChild={asChild}
      {...rest}
    >
      {children}
    </RadixPopover.Trigger>
  ),
)

Trigger.displayName = 'Popover.Trigger'
