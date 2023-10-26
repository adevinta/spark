import * as RadixPopover from '@radix-ui/react-popover'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

export type ArrowProps = RadixPopover.PopoverArrowProps

export const Arrow = forwardRef<SVGSVGElement, ArrowProps>(
  ({ asChild = false, width = 16, height = 8, className, ...rest }, ref) => {
    /**
     * This is necessary to override a Radix UI behaviour.
     * Radix hides the arrow when the Popover is too misaligned from its trigger element.
     */
    const styles = cx('fill-surface visible', className)

    return (
      <RadixPopover.Arrow
        data-spark-component="popover-arrow"
        ref={ref}
        className={styles}
        asChild={asChild}
        width={width}
        height={height}
        {...rest}
      />
    )
  }
)

Arrow.displayName = 'Popover.Arrow'
