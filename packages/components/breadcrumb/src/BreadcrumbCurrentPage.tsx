import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export interface CurrentPageProps extends ComponentPropsWithoutRef<'span'> {
  asChild?: boolean
  className?: string
}

export const CurrentPage = forwardRef<HTMLSpanElement, CurrentPageProps>(
  ({ asChild = false, className, ...rest }, ref) => {
    const Component = asChild ? Slot : 'span'

    return (
      <Component
        data-spark-component="breadcrumb-current-page"
        role="link"
        aria-current="page"
        aria-disabled
        className={className}
        ref={ref}
        {...rest}
      />
    )
  }
)

CurrentPage.displayName = 'Breadcrumb.CurrentPage'
