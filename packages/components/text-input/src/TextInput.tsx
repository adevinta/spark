import React, { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react'

import { Input, type InputProps } from './Input'
import { InputField } from './InputField'

export interface TextInputProps
  extends PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'label'>>,
    InputProps {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ asChild, intent, ...props }, forwardedRef) => {
    return (
      <InputField disabled={props.disabled} intent={intent}>
        <Input {...props} intent={intent} ref={forwardedRef} />
      </InputField>
    )
  }
)

TextInput.displayName = 'TextInput'
