import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, useEffect, useId } from 'react'

import { useFormField } from './FormFieldContext'

export type FormFieldMessageProps = ComponentPropsWithoutRef<'span'>

export const FormFieldMessage = forwardRef<HTMLSpanElement, FormFieldMessageProps>(
  ({ id: idProp, className, ...others }, ref) => {
    const { onMessageIdAdd, onMessageIdRemove } = useFormField()
    const currentId = `:form-field-message-${useId()}`
    const id = idProp || currentId

    useEffect(() => {
      onMessageIdAdd(id)

      return () => {
        onMessageIdRemove(id)
      }
    }, [id, onMessageIdAdd, onMessageIdRemove])

    return (
      <span
        ref={ref}
        id={id}
        data-spark-component="form-field-message"
        className={cx(className, 'text-caption')}
        {...others}
      />
    )
  }
)

FormFieldMessage.displayName = 'FormField.Message'
