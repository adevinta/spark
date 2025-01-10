import { Slot } from '@spark-ui/slot'
import { TextLink } from '@spark-ui/text-link'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, Ref } from 'react'

export interface CurrentPageProps extends ComponentPropsWithoutRef<typeof TextLink> {
  asChild?: boolean
  className?: string
  ref?: Ref<HTMLAnchorElement>
}

export const CurrentPage = ({
  asChild = false,
  className,
  children,
  ...rest
}: CurrentPageProps) => {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      data-spark-component="breadcrumb-current-page"
      role="link"
      aria-disabled
      aria-current="page"
      className={cx(
        '!inline overflow-hidden text-ellipsis whitespace-nowrap font-bold text-current',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

CurrentPage.displayName = 'Breadcrumb.CurrentPage'
