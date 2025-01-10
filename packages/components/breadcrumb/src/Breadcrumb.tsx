import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, Ref } from 'react'

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
  className?: string
  ['aria-label']: string
  ref?: Ref<HTMLElement>
}

export const Breadcrumb = ({
  className,
  'aria-label': ariaLabel,
  ref,
  ...rest
}: BreadcrumbProps) => {
  return (
    <nav
      data-spark-component="breadcrumb"
      ref={ref}
      aria-label={ariaLabel}
      className={cx('text-caption text-neutral', className)}
    >
      <ol className={cx('flex flex-wrap items-center gap-sm break-words')} {...rest} />
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb.Breadcrumb'
