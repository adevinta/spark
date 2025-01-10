import { RefObject } from 'react'

import { FormFieldStateMessage, FormFieldStateMessageProps } from './FormFieldStateMessage'

export type FormFieldSuccessMessageProps = Omit<FormFieldStateMessageProps, 'state'> & {
  ref?: RefObject<HTMLSpanElement>
}

export const FormFieldSuccessMessage = ({ ref, ...props }: FormFieldSuccessMessageProps) => {
  return (
    <FormFieldStateMessage
      ref={ref}
      data-spark-component="form-field-success-message"
      state="success"
      {...props}
    />
  )
}

FormFieldSuccessMessage.displayName = 'FormField.SuccessMessage'
