import { Slot } from '@spark-ui/slot'
import { TextLink } from '@spark-ui/text-link'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, Ref } from 'react'

export interface LinkProps extends ComponentPropsWithoutRef<typeof TextLink> {
  asChild?: boolean
  className?: string
  href?: string
  ref?: Ref<HTMLAnchorElement>
}

export const Link = ({
  asChild = false,
  className,
  bold = true,
  intent = 'current',
  underline = true,
  href,
  ref,
  ...rest
}: LinkProps) => {
  const Component = asChild ? Slot : TextLink

  return (
    <Component
      data-spark-component="breadcrumb-link"
      href={href}
      ref={ref}
      className={cx('!inline overflow-hidden text-ellipsis whitespace-nowrap', className)}
      bold={bold}
      intent={intent}
      underline={underline}
      {...rest}
    />
  )
}

Link.displayName = 'Breadcrumb.Link'
