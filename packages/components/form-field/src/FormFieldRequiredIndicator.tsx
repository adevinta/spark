import { Label, LabelRequiredIndicatorProps } from '@spark-ui/label'
import { forwardRef } from 'react'

export type FormFieldRequiredIndicatorProps = LabelRequiredIndicatorProps

export const FormFieldRequiredIndicator = forwardRef<
  HTMLSpanElement,
  FormFieldRequiredIndicatorProps
>((props, ref) => {
  return <Label.RequiredIndicator ref={ref} {...props} />
})

FormFieldRequiredIndicator.displayName = 'FormField.RequiredIndicator'
