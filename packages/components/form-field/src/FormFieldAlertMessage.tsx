import { RefObject } from 'react'

import { FormFieldStateMessage, FormFieldStateMessageProps } from './FormFieldStateMessage'

export type FormFieldAlertMessageProps = Omit<FormFieldStateMessageProps, 'state'> & {
  ref?: RefObject<HTMLSpanElement>
}

export const FormFieldAlertMessage = ({ ref, ...props }: FormFieldAlertMessageProps) => {
  return (
    <FormFieldStateMessage
      ref={ref}
      data-spark-component="form-field-alert-message"
      state="alert"
      {...props}
    />
  )
}

FormFieldAlertMessage.displayName = 'FormField.AlertMessage'
