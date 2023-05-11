import { useId } from '@radix-ui/react-id'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { FormControlContextState } from './FormControlContext'
import { FormControlProvider } from './FormControlProvider'

export interface FormControlProps
  extends ComponentPropsWithoutRef<'div'>,
    Pick<FormControlContextState, 'name' | 'isRequired' | 'isInvalid'> {
  asChild?: boolean
}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ className, name, isInvalid = false, isRequired = false, asChild = false, ...others }, ref) => {
    const id = useId()
    const Component = asChild ? Slot : 'div'

    return (
      <FormControlProvider id={id} name={name} isRequired={isRequired} isInvalid={isInvalid}>
        <Component
          ref={ref}
          data-spark-component="form-control"
          className={cx(className, 'flex flex-col gap-xl')}
          {...others}
        />
      </FormControlProvider>
    )
  }
)

FormControl.displayName = 'FormControl'
