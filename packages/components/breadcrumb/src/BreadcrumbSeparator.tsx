import { Icon } from '@spark-ui/icon'
import { ArrowVerticalRight } from '@spark-ui/icons/dist/icons/ArrowVerticalRight'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, RefObject } from 'react'

export interface SeparatorProps extends ComponentPropsWithoutRef<'li'> {
  asChild?: boolean
  className?: string
  ref?: RefObject<HTMLLIElement>
}

export const Separator = ({
  asChild = false,
  className,
  children,
  ref,
  ...rest
}: SeparatorProps) => {
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
      {children ?? (
        <Icon>
          <ArrowVerticalRight />
        </Icon>
      )}
    </Component>
  )
}

Separator.displayName = 'Breadcrumb.Separator'
