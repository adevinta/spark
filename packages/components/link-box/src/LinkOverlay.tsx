import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface LinkOverlayProps extends ComponentPropsWithoutRef<'a'> {
  asChild?: boolean
}

export const LinkOverlay = forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  ({ className, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'a'

    return (
      <Component
        ref={ref}
        data-spark-component="link-overlay"
        className={cx(
          "static before:absolute before:left-none before:top-none before:z-base before:block before:h-full before:w-full before:content-['']",
          className
        )}
        {...props}
      />
    )
  }
)

LinkOverlay.displayName = 'LinkBox.Overlay'
