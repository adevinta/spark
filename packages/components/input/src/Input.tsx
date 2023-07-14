import { useFormFieldControl } from '@spark-ui/form-field'
import { Slot } from '@spark-ui/slot'
import { ChangeEventHandler, ComponentPropsWithoutRef, forwardRef } from 'react'

import { inputStyles } from './Input.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  asChild?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, asChild, onChange, ...others }, ref) => {
    const field = useFormFieldControl()
    const group = useInputGroup()

    const { id, name, isInvalid, isRequired, description } = field
    const { hasLeadingAddon, hasTrailingAddon, hasLeadingIcon, hasTrailingIcon, hasClearButton } =
      group
    const Component = asChild ? Slot : 'input'
    const state = field.state ?? group.state

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
      if (onChange) {
        onChange(event)
      }

      if (group.onChange) {
        group.onChange(event.target.value)
      }
    }

    return (
      <Component
        ref={ref}
        id={id}
        name={name}
        className={inputStyles({
          className,
          intent: state,
          isStandalone: !!group.isStandalone,
          hasLeadingAddon: !!hasLeadingAddon,
          hasTrailingAddon: !!hasTrailingAddon,
          hasLeadingIcon: !!hasLeadingIcon,
          hasTrailingIcon: !!hasTrailingIcon,
          hasClearButton: !!hasClearButton,
        })}
        disabled={group.disabled}
        required={isRequired}
        onChange={handleChange}
        aria-describedby={description}
        aria-invalid={isInvalid}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
