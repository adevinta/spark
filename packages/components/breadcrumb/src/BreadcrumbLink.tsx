import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  asChild?: boolean
  className?: string
  href?: string
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ asChild = false, className, href, ...rest }, ref) => {
    const Component = asChild ? Slot : 'a'

    return (
      <Component
        data-spark-component="breadcrumb-link"
        href={href}
        ref={ref}
        className={className}
        {...rest}
      />
    )
  }
)

Link.displayName = 'Breadcrumb.Link'
