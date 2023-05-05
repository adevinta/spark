import { Label, LabelProps } from '@radix-ui/react-label'
import { forwardRef } from 'react'

import { useFormControl } from './FormControlContext'

export type FormLabelProps = LabelProps

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ htmlFor: htmlForProp, ...others }, ref) => {
    const field = useFormControl()

    const htmlFor = htmlForProp || field.id

    return <Label ref={ref} data-spark-component="form-label" htmlFor={htmlFor} {...others} />
  }
)

FormLabel.displayName = 'FormLabel'
