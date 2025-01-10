import { cx } from 'class-variance-authority'
import { RefObject } from 'react'

import { FormFieldMessage, FormFieldMessageProps } from './FormFieldMessage'

export type FormFieldHelperMessageProps = FormFieldMessageProps & {
  ref?: RefObject<HTMLSpanElement>
}

export const FormFieldHelperMessage = ({
  className,
  ref,
  ...others
}: FormFieldHelperMessageProps) => {
  return (
    <FormFieldMessage
      ref={ref}
      data-spark-component="form-field-helper-message"
      className={cx('text-on-surface/dim-1', className)}
      {...others}
    />
  )
}

FormFieldHelperMessage.displayName = 'FormField.HelperMessage'
