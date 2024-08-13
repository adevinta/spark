import { Slot } from '@spark-ui/slot'
import { TextLink } from '@spark-ui/text-link'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface LinkProps extends ComponentPropsWithoutRef<typeof TextLink> {
  asChild?: boolean
  className?: string
  href?: string
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      asChild = false,
      className,
      bold = true,
      intent = 'current',
      underline = true,
      href,
      ...rest
    },
    ref
  ) => {
    const Component = asChild ? Slot : TextLink

    return (
      <Component
        data-spark-component="breadcrumb-link"
        href={href}
        ref={ref}
        className={className}
        bold={bold}
        intent={intent}
        underline={underline}
        {...rest}
      />
    )
  }
)

Link.displayName = 'Breadcrumb.Link'
