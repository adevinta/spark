import * as RadixPopover from '@radix-ui/react-popover'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { usePopover } from './PopoverContext'

export type ArrowProps = RadixPopover.PopoverArrowProps

export const Arrow = forwardRef<SVGSVGElement, ArrowProps>(
  ({ asChild = false, width = 16, height = 8, className, ...rest }, ref) => {
    const { intent } = usePopover()

    /**
     * This is necessary to override a Radix UI behaviour.
     * Radix hides the arrow when the Popover is too misaligned from its trigger element.
     */
    const styles = cva('visible', {
      variants: {
        intent: {
          surface: 'fill-surface',
          main: 'fill-main-container',
          support: 'fill-support-container',
          accent: 'fill-accent-container',
          basic: 'fill-basic-container',
          success: 'fill-success-container',
          alert: 'fill-alert-container',
          danger: 'fill-error-container',
          info: 'fill-info-container',
          neutral: 'fill-neutral-container',
        },
      },
      defaultVariants: {
        intent: 'surface',
      },
    })

    return (
      <RadixPopover.Arrow
        data-spark-component="popover-arrow"
        ref={ref}
        className={styles({ intent, className })}
        asChild={asChild}
        width={width}
        height={height}
        {...rest}
      />
    )
  }
)

Arrow.displayName = 'Popover.Arrow'
