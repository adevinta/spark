import { forwardRef } from 'react'

import { FormFieldStateMessage, FormFieldStateMessageProps } from './FormFieldStateMessage'

export type FormFieldSuccessMessageProps = Omit<FormFieldStateMessageProps, 'state'>

export const FormFieldSuccessMessage = forwardRef<HTMLSpanElement, FormFieldSuccessMessageProps>(
  (props, ref) => {
    return (
      <FormFieldStateMessage
        ref={ref}
        data-spark-component="form-field-success-message"
        state="success"
        {...props}
      />
    )
  },
)

FormFieldSuccessMessage.displayName = 'FormField.SuccessMessage'
