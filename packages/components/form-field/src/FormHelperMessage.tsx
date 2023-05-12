import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { FormMessage, FormMessageProps } from './FormMessage'

export type FormHelperMessageProps = FormMessageProps

export const FormHelperMessage = forwardRef<HTMLSpanElement, FormHelperMessageProps>(
  ({ className, ...others }, ref) => {
    return (
      <FormMessage
        ref={ref}
        data-spark-component="form-helper-message"
        className={cx(className, 'text-neutral')}
        {...others}
      />
    )
  }
)

FormHelperMessage.displayName = 'FormHelperMessage'
