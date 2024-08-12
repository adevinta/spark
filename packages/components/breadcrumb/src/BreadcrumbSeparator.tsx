import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface SeparatorProps extends ComponentPropsWithoutRef<'li'> {
  asChild?: boolean
  className?: string
}

export const Separator = forwardRef<HTMLLIElement, SeparatorProps>(
  ({ asChild = false, className, children, ...rest }, ref) => {
    const Component = asChild ? Slot : 'li'

    return (
      <Component
        role="presentation"
        aria-hidden
        data-spark-component="breadcrumb-separator"
        ref={ref}
        className={cx('inline-flex items-center gap-sm', className)}
        {...rest}
      >
        {children ?? '/'}
      </Component>
    )
  }
)

Separator.displayName = 'Breadcrumb.Separator'
