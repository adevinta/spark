import { forwardRef } from 'react'

import { useFormField } from './FormFieldContext'
import { FormFieldMessage, FormFieldMessageProps } from './FormFieldMessage'
import {
  formFieldStateMessageStyles,
  FormFieldStateMessageStylesProps,
} from './FormFieldStateMessage.styles'

export interface FormFieldStateMessageProps
  extends FormFieldMessageProps,
    FormFieldStateMessageStylesProps {}

export const FormFieldStateMessage = forwardRef<HTMLSpanElement, FormFieldStateMessageProps>(
  ({ className, state, ...others }, ref) => {
    const field = useFormField()

    if (field.state !== state) {
      return null
    }

    return (
      <FormFieldMessage
        ref={ref}
        data-spark-component="form-field-state-message"
        aria-live="polite"
        className={formFieldStateMessageStyles({ className, state })}
        {...others}
      />
    )
  }
)

FormFieldStateMessage.displayName = 'FormField.StateMessage'
