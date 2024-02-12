import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

export interface LinkBoxProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

export const LinkBox = forwardRef<HTMLDivElement, LinkBoxProps>(
  ({ className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'div'

    return (
      <Component
        ref={ref}
        data-spark-component="link-box"
        className={cx(
          'relative [&_a[href]:not([data-spark-component="link-overlay"])]:relative [&_a[href]:not([data-spark-component="link-overlay"])]:z-raised [&_button]:relative [&_button]:z-raised',
          className
        )}
        {...props}
      />
    )
  }
)

LinkBox.displayName = 'LinkBox'
