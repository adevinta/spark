import { Slot } from '@spark-ui/slot'
import { TextLink } from '@spark-ui/text-link'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface CurrentPageProps extends ComponentPropsWithoutRef<typeof TextLink> {
  asChild?: boolean
  className?: string
}

export const CurrentPage = forwardRef<HTMLAnchorElement, CurrentPageProps>(
  (
    { asChild = false, className, bold = true, intent = 'current', underline = false, ...rest },
    ref
  ) => {
    const Component = asChild ? Slot : TextLink

    return (
      <Component
        data-spark-component="breadcrumb-current-page"
        role="link"
        href=""
        aria-current="page"
        className={cx('!inline overflow-hidden text-ellipsis whitespace-nowrap', className)}
        bold={bold}
        intent={intent}
        underline={underline}
        ref={ref}
        {...rest}
      />
    )
  }
)

CurrentPage.displayName = 'Breadcrumb.CurrentPage'
