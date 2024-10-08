import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
  className?: string
  ['aria-label']: string
}

export const Breadcrumb = forwardRef<HTMLOListElement, BreadcrumbProps>(
  ({ className, 'aria-label': ariaLabel, ...rest }, ref) => {
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
)

Breadcrumb.displayName = 'Breadcrumb.Breadcrumb'
