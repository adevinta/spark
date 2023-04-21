import React, { forwardRef } from 'react'
import { Label } from './InputLabel'
import { InputElement, type InputElementProps } from './InputElement'

import { textInputStyles } from './TextInput.styles'

export type InputProps = InputElementProps

export const TextInput = forwardRef<HTMLInputElement, Omit<InputProps, 'label'>>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Label data-spark-component="text-input" disabled={props.disabled} className={textInputStyles()}>
        <InputElement {...props} label={children} ref={forwardedRef} />
      </Label>
    )
  }
)

TextInput.displayName = 'TextInput'
