import { useId } from '@radix-ui/react-id'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { FormFieldContextState } from './FormFieldContext'
import { FormFieldProvider } from './FormFieldProvider'

export interface FormFieldProps
  extends ComponentPropsWithoutRef<'div'>,
    Pick<FormFieldContextState, 'name' | 'state' | 'isRequired'> {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: boolean
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, name, state, isRequired = false, asChild = false, ...others }, ref) => {
    const id = useId()
    const Component = asChild ? Slot : 'div'

    return (
      <FormFieldProvider id={id} name={name} isRequired={isRequired} state={state}>
        <Component
          ref={ref}
          data-spark-component="form-field"
          className={cx(className, 'flex flex-col gap-xl')}
          {...others}
        />
      </FormFieldProvider>
    )
  }
)

FormField.displayName = 'FormField'
