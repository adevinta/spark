import * as RadixPopover from '@radix-ui/react-popover'
import { forwardRef } from 'react'

export type AnchorProps = RadixPopover.PopoverAnchorProps

export const Anchor = forwardRef<HTMLDivElement, AnchorProps>(
  ({ asChild = false, children, ...rest }, ref) => (
    <RadixPopover.Anchor
      data-spark-component="popover-anchor"
      ref={ref}
      asChild={asChild}
      {...rest}
    >
      {children}
    </RadixPopover.Anchor>
  )
)

Anchor.displayName = 'Popover.Anchor'
