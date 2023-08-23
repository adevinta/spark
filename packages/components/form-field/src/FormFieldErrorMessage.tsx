import { forwardRef } from 'react'

import { FormFieldStateMessage, FormFieldStateMessageProps } from './FormFieldStateMessage'

export type FormFieldErrorMessageProps = Omit<FormFieldStateMessageProps, 'state'>

export const FormFieldErrorMessage = forwardRef<HTMLSpanElement, FormFieldErrorMessageProps>(
  (props, ref) => {
    return (
      <FormFieldStateMessage
        ref={ref}
        data-spark-component="form-field-error-message"
        state="error"
        {...props}
      />
    )
  },
)

FormFieldErrorMessage.displayName = 'FormField.ErrorMessage'
