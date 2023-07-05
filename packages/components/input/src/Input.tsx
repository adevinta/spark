import { useFormFieldControl } from '@spark-ui/form-field'
import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { inputStyles } from './Input.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  asChild?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, asChild, ...others }, ref) => {
    const field = useFormFieldControl()
    const group = useInputGroup()

    const { id, name, isInvalid, isRequired, description } = field
    const { hasLeadingAddon, hasTrailingAddon, hasLeadingIcon, hasTrailingIcon } = group
    const Component = asChild ? Slot : 'input'
    const state = field.state ?? group.state

    return (
      <Component
        ref={ref}
        id={id}
        name={name}
        className={inputStyles({
          className,
          intent: state,
          hasLeadingAddon: !!hasLeadingAddon,
          hasTrailingAddon: !!hasTrailingAddon,
          hasLeadingIcon: !!hasLeadingIcon,
          hasTrailingIcon: !!hasTrailingIcon,
        })}
        disabled={group.isDisabled}
        required={isRequired}
        aria-describedby={description}
        aria-invalid={isInvalid}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
