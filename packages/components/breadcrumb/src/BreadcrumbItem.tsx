import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface ItemProps extends ComponentPropsWithoutRef<'li'> {
  className?: string
}

export const Item = forwardRef<HTMLLIElement, ItemProps>(({ className, ...rest }, ref) => {
  return (
    <li
      data-spark-component="breadcrumb-item"
      ref={ref}
      className={cx('inline-flex min-w-none items-center gap-md', className)}
      {...rest}
    />
  )
})

Item.displayName = 'Breadcrumb.Item'
