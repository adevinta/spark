import { useId } from '@radix-ui/react-id'
import { Slot } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { FormControlProvider } from './FormControlProvider'

export interface FormControlProps extends ComponentPropsWithoutRef<'div'> {
  name?: string
  isInvalid?: boolean
  asChild?: boolean
}

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ className, name, isInvalid = false, asChild = false, ...others }, ref) => {
    const id = useId()
    const Component = asChild ? Slot : 'div'

    return (
      <FormControlProvider id={id} name={name} isInvalid={isInvalid}>
        <Component
          ref={ref}
          data-spark-component="form-control"
          role="group"
          className={cx(className, 'flex flex-col gap-sm')}
          {...others}
        />
      </FormControlProvider>
    )
  }
)

FormControl.displayName = 'FormControl'
