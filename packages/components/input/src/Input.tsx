import { useFormFieldControl } from '@spark-ui/form-field'
import { forwardRef } from 'react'

import { inputStyles } from './Input.styles'
import { useInputGroup } from './InputGroupContext'
import { InputPrimitive, InputPrimitiveProps } from './InputPrimitive'

export interface InputProps extends InputPrimitiveProps {
  state: 'error' | 'alert' | 'success'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className: classNameProp, state: stateProp, ...others }, ref) => {
    const field = useFormFieldControl()
    const group = useInputGroup()
    const isGrouped = !!group
    const state = field.state ?? stateProp

    return (
      <InputPrimitive
        ref={ref}
        className={inputStyles({ className: classNameProp, intent: state, isGrouped })}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
