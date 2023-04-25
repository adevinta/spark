import * as RadixPopover from '@radix-ui/react-popover'
import { forwardRef, type PropsWithChildren } from 'react'

import { styles } from './PopoverContent.styles'

export type ContentProps = PropsWithChildren<RadixPopover.PopoverContentProps>

export const Content = forwardRef<HTMLDivElement, ContentProps>(
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
      collisionPadding = 0,
      hideWhenDetached = false,
      side = 'bottom',
      sideOffset = 0,
      sticky = 'partial',
      ...rest
    },
    ref
  ) => {
    return (
      <RadixPopover.Content
        className={styles({ className })}
        data-spark-component="popover-content"
        ref={ref}
        {...{
          align,
          asChild,
          avoidCollisions,
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
    )
  }
)

Content.displayName = 'Popover.Content'
