import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithRef } from 'react'

export interface LinkBoxLinkProps extends ComponentPropsWithRef<'a'> {
  asChild?: boolean
}

export const LinkBoxLink = ({ className, asChild, ref, ...props }: LinkBoxLinkProps) => {
  const Component = asChild ? Slot : 'a'

  return (
    <Component
      ref={ref}
      data-spark-component="link-box-link"
      className={cx(
        "static before:absolute before:left-none before:top-none before:z-base before:block before:size-full before:content-['']",
        className
      )}
      {...props}
    />
  )
}

LinkBoxLink.displayName = 'LinkBox.Link'
