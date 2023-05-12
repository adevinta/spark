import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type FormFieldRequiredIndicatorProps = ComponentPropsWithoutRef<'span'>

export const FormFieldRequiredIndicator = forwardRef<
  HTMLSpanElement,
  FormFieldRequiredIndicatorProps
>(({ className, children = '*', ...others }, ref) => {
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
})

FormFieldRequiredIndicator.displayName = 'FormField.RequiredIndicator'
