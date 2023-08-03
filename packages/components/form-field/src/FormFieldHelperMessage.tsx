import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { FormFieldMessage, FormFieldMessageProps } from './FormFieldMessage'

export type FormFieldHelperMessageProps = FormFieldMessageProps

export const FormFieldHelperMessage = forwardRef<HTMLSpanElement, FormFieldHelperMessageProps>(
  ({ className, ...others }, ref) => {
    return (
      <FormFieldMessage
        ref={ref}
        data-spark-component="form-field-helper-message"
        className={cx('text-on-surface/dim-1', className)}
        {...others}
      />
    )
  }
)

FormFieldHelperMessage.displayName = 'FormField.HelperMessage'
