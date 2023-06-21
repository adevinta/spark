import { useFormFieldState } from '@spark-ui/form-field'
import { forwardRef } from 'react'

import { inputStyles, InputStylesProps } from './Input.styles'
import { useInputGroup } from './InputGroupContext'
import { InputPrimitive, InputPrimitiveProps } from './InputPrimitive'

export interface InputProps extends InputPrimitiveProps, InputStylesProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className: classNameProp, intent: intentProp = 'neutral', disabled: disabledProp, ...others },
    ref
  ) => {
    const field = useFormFieldState()
    const group = useInputGroup()
    const { isInvalid } = field
    const isGrouped = !!group
    const intent = isInvalid ? 'error' : intentProp

    return (
      <InputPrimitive
        ref={ref}
        className={inputStyles({ className: classNameProp, intent, isGrouped })}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
