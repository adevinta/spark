import { forwardRef } from 'react'

import { FormFieldStateMessage, FormFieldStateMessageProps } from './FormFieldStateMessage'

export type FormFieldAlertMessageProps = Omit<FormFieldStateMessageProps, 'state'>

export const FormFieldAlertMessage = forwardRef<HTMLSpanElement, FormFieldAlertMessageProps>(
  (props, ref) => {
    return (
      <FormFieldStateMessage
        ref={ref}
        data-spark-component="form-field-alert-message"
        state="alert"
        {...props}
      />
    )
  }
)

FormFieldAlertMessage.displayName = 'FormField.AlertMessage'
