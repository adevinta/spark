import { useId } from '@radix-ui/react-id'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { FormFieldContextState } from './FormFieldContext'
import { FormFieldProvider } from './FormFieldProvider'

export interface FormFieldProps
  extends ComponentPropsWithoutRef<'div'>,
    Pick<FormFieldContextState, 'name' | 'isRequired' | 'isInvalid'> {
  asChild?: boolean
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, name, isInvalid = false, isRequired = false, asChild = false, ...others }, ref) => {
    const id = useId()
    const Component = asChild ? Slot : 'div'

    return (
      <FormFieldProvider id={id} name={name} isRequired={isRequired} isInvalid={isInvalid}>
        <Component
          ref={ref}
          data-spark-component="form-control"
          className={cx(className, 'flex flex-col gap-xl')}
          {...others}
        />
      </FormFieldProvider>
    )
  }
)

FormField.displayName = 'FormField'
