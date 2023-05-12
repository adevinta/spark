import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { useFormField } from './FormFieldContext'
import { FormFieldMessage, FormFieldMessageProps } from './FormFieldMessage'

export type FormFieldErrorMessageProps = FormFieldMessageProps

export const FormFieldErrorMessage = forwardRef<HTMLSpanElement, FormFieldErrorMessageProps>(
  ({ className, ...others }, ref) => {
    const { isInvalid } = useFormField()

    if (!isInvalid) {
      return null
    }

    return (
      <FormFieldMessage
        ref={ref}
        data-spark-component="form-error-message"
        aria-live="polite"
        className={cx(className, 'text-error')}
        {...others}
      />
    )
  }
)

FormFieldErrorMessage.displayName = 'FormField.ErrorMessage'
