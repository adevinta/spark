import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type FormRequiredIndicatorProps = ComponentPropsWithoutRef<'span'>

export const FormRequiredIndicator = forwardRef<HTMLSpanElement, FormRequiredIndicatorProps>(
  ({ className, children = '*', ...others }, ref) => {
    return (
      <span
        ref={ref}
        data-spark-component="form-required-indicator"
        role="presentation"
        aria-hidden="true"
        className={cx(className, 'text-error')}
        {...others}
      >
        {children}
      </span>
    )
  }
)

FormRequiredIndicator.displayName = 'FormRequiredIndicator'
