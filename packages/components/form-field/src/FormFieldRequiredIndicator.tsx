import { Label, LabelRequiredIndicatorProps } from '@spark-ui/label'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

export type FormFieldRequiredIndicatorProps = LabelRequiredIndicatorProps

export const FormFieldRequiredIndicator = forwardRef<
  HTMLSpanElement,
  FormFieldRequiredIndicatorProps
>(({ className, ...props }, ref) => {
  return <Label.RequiredIndicator ref={ref} className={cx('ml-sm', className)} {...props} />
})

FormFieldRequiredIndicator.displayName = 'FormField.RequiredIndicator'
