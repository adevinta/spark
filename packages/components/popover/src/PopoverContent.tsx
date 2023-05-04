import * as RadixPopover from '@radix-ui/react-popover'
import { forwardRef, useState } from 'react'

import { styles } from './PopoverContent.styles'

export const Content = forwardRef<HTMLDivElement, RadixPopover.PopoverContentProps>(
  (
    {
      // Spark props
      className,
      children,
      // Radix props
      align = 'center',
      arrowPadding = 0,
      asChild = false,
      avoidCollisions = true,
      collisionBoundary,
      collisionPadding = 10,
      hideWhenDetached = false,
      side = 'bottom',
      sideOffset = 8,
      sticky = 'partial',
      ...rest
    },
    ref
  ) => {
    // const [collisionBoundary, setBoundaryContainer] = useState<HTMLDivElement | null>(null)

    return (
      // <div
      //   ref={setBoundaryContainer}
      //   className="relative block p-md w-sz-256 h-sz-240 bg-primary-container border-md border-primary rounded-sm border-dashed"
      // >
      <RadixPopover.Content
        className={styles({ enforceBoundaries: !!collisionBoundary, className })}
        data-spark-component="popover-content"
        ref={ref}
        {...{
          align,
          asChild,
          avoidCollisions,
          collisionBoundary,
          collisionPadding,
          hideWhenDetached,
          side,
          sideOffset,
          sticky,
        }}
        {...rest}
      >
        {children}
      </RadixPopover.Content>
      // </div>
    )
  }
)

Content.displayName = 'Popover.Content'
