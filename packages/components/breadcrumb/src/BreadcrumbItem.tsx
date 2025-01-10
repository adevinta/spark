import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, Ref } from 'react'

export interface ItemProps extends ComponentPropsWithoutRef<'li'> {
  className?: string
  ref?: Ref<HTMLLIElement>
}

export const Item = ({ className, ...rest }: ItemProps) => {
  return (
    <li
      data-spark-component="breadcrumb-item"
      className={cx('inline-flex min-w-none items-center gap-sm', className)}
      {...rest}
    />
  )
}

Item.displayName = 'Breadcrumb.Item'
