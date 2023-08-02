import { useFormFieldControl } from '@spark-ui/form-field'
import { Slot } from '@spark-ui/slot'
import {
  ChangeEventHandler,
  ComponentPropsWithoutRef,
  forwardRef,
  KeyboardEventHandler,
} from 'react'

import { inputStyles } from './Input.styles'
import { useInputGroup } from './InputGroupContext'

type InputPrimitiveProps = ComponentPropsWithoutRef<'input'>

export interface InputProps extends InputPrimitiveProps {
  asChild?: boolean
  onValueChange?: (value: string) => void
}

const Root = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      asChild = false,
      onValueChange,
      onChange,
      onKeyDown,
      disabled: disabledProp,
      ...others
    },
    ref
  ) => {
    const field = useFormFieldControl()
    const group = useInputGroup()

    const { id, name, isInvalid, isRequired, description } = field
    const {
      hasLeadingAddon,
      hasTrailingAddon,
      hasLeadingIcon,
      hasTrailingIcon,
      hasClearButton,
      onClear,
    } = group
    const Component = asChild ? Slot : 'input'
    const state = field.state ?? group.state
    const disabled = group.disabled ?? disabledProp

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
      if (onChange) {
        onChange(event)
      }

      if (onValueChange) {
        onValueChange(event.target.value)
      }
    }

    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
      if (onKeyDown) {
        onKeyDown(event)
      }

      if (hasClearButton && onClear && event.key === 'Escape') {
        onClear()
      }
    }

    return (
      <Component
        ref={ref}
        id={id}
        name={name}
        className={inputStyles({
          asChild,
          className,
          intent: state,
          hasLeadingAddon: !!hasLeadingAddon,
          hasTrailingAddon: !!hasTrailingAddon,
          hasLeadingIcon: !!hasLeadingIcon,
          hasTrailingIcon: !!hasTrailingIcon,
          hasClearButton: !!hasClearButton,
        })}
        disabled={disabled}
        required={isRequired}
        aria-describedby={description}
        aria-invalid={isInvalid}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...others}
      />
    )
  }
)

export const Input = Object.assign(Root, {
  id: 'Input',
})

Input.displayName = 'Input'
