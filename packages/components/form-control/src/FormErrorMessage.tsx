import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { useFormControl } from './FormControlContext'
import { FormMessage, FormMessageProps } from './FormMessage'

export type FormErrorMessageProps = FormMessageProps

export const FormErrorMessage = forwardRef<HTMLSpanElement, FormErrorMessageProps>(
  ({ className, ...others }, ref) => {
    const { isInvalid } = useFormControl()

    if (!isInvalid) {
      return null
    }

    return (
      <FormMessage
        ref={ref}
        data-spark-component="form-error-message"
        aria-live="polite"
        className={cx(className, 'text-error')}
        {...others}
      />
    )
  }
)

FormErrorMessage.displayName = 'FormErrorMessage'
