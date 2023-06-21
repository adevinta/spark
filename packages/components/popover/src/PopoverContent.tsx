import * as RadixPopover from '@radix-ui/react-popover'
import { forwardRef } from 'react'

import { styles, type StylesProps } from './PopoverContent.styles'
import { usePopover } from './PopoverContext'

export type ContentProps = RadixPopover.PopoverContentProps & StylesProps

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  (
    {
      // Spark props
      className,
      children,
      matchTriggerWidth = false,
      // Radix props
      align = 'center',
      arrowPadding = 16, // In order not to overlap the arrow on the rounded corners of the popover.
      asChild = false,
      avoidCollisions = true,
      collisionBoundary,
      collisionPadding = 0,
      hideWhenDetached = false,
      side = 'bottom',
      sideOffset = 8,
      sticky = 'partial',
      ...rest
    },
    ref
  ) => {
    const { hasCloseButton } = usePopover()

    return (
      <RadixPopover.Content
        className={styles({
          enforceBoundaries: !!collisionBoundary,
          matchTriggerWidth,
          hasCloseButton,
          className,
        })}
        data-spark-component="popover-content"
        ref={ref}
        {...{
          align,
          arrowPadding,
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
    )
  }
)

Content.displayName = 'Popover.Content'
