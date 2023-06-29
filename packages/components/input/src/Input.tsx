import { useFormFieldControl } from '@spark-ui/form-field'
import { forwardRef } from 'react'

import { inputStyles, InputStylesProps } from './Input.styles'
import { useInputGroup } from './InputGroupContext'
import { InputPrimitive, InputPrimitiveProps } from './InputPrimitive'

export interface InputProps extends InputPrimitiveProps, InputStylesProps {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className: classNameProp, status: statusProp = 'neutral', ...others }, ref) => {
    const field = useFormFieldControl()
    const group = useInputGroup()
    const isGrouped = !!group
    const status = field.state ?? statusProp

    return (
      <InputPrimitive
        ref={ref}
        className={inputStyles({ className: classNameProp, status, isGrouped })}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
