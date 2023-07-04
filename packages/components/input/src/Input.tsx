import { useFormFieldControl } from '@spark-ui/form-field'
import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { inputStyles, type InputStylesProps } from './Input.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputProps
  extends ComponentPropsWithoutRef<'input'>,
    Omit<
      InputStylesProps,
      'hasLeadingAddon' | 'hasTrailingAddon' | 'hasLeadingIcon' | 'hasTrailingIcon' | 'intent'
    > {
  state?: 'error' | 'alert' | 'success'
  asChild?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, state: stateProp, asChild, ...others }, ref) => {
    const field = useFormFieldControl()
    const group = useInputGroup() || {}

    const { id, name, isInvalid, isRequired, description } = field
    const { hasLeadingAddon, hasTrailingAddon, hasLeadingIcon, hasTrailingIcon } = group
    // const isDisabled = group.isDisabled ?? disabledProp
    // const isGrouped = !!group
    const Component = asChild ? Slot : 'input'
    const state = field.state ?? stateProp

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
