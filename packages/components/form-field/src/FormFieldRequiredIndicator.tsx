import { Label, LabelRequiredIndicatorProps } from '@spark-ui/label'
import { cx } from 'class-variance-authority'
import { RefObject } from 'react'

export type FormFieldRequiredIndicatorProps = LabelRequiredIndicatorProps & {
  ref?: RefObject<HTMLSpanElement>
}

export const FormFieldRequiredIndicator = ({
  className,
  ref,
  ...props
}: FormFieldRequiredIndicatorProps) => {
  return <Label.RequiredIndicator ref={ref} className={cx('ml-sm', className)} {...props} />
}

FormFieldRequiredIndicator.displayName = 'FormField.RequiredIndicator'
