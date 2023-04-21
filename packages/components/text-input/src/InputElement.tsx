import React, { forwardRef, PropsWithChildren, InputHTMLAttributes, ReactNode } from 'react'
import {
  inputElementStyles,
  inputElementWrapperStyles,
  type InputElementStylesProps,
} from './InputElement.styles'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { InputFieldset } from './InputFIeldset'

export interface InputElementProps
  extends PropsWithChildren<
      Omit<InputHTMLAttributes<HTMLInputElement>, 'disabled' | 'placeholder'>
    >,
    InputElementStylesProps {
  mandatory?: boolean | string
  disabled?: boolean
  placeholder?: string
  label: ReactNode
}

export const InputElement = forwardRef<HTMLInputElement, InputElementProps>(
  ({ className, mandatory, intent, placeholder, label, ...props }, forwardedRef) => {
    return (
      <div className={inputElementWrapperStyles({ intent, className })}>
        <input
          placeholder={placeholder}
          {...props}
          ref={forwardedRef}
          className={inputElementStyles()}
        />
        <InputFieldset label={label} mandatory={mandatory} placeholder={placeholder} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </div>
    )
  }
)

InputElement.displayName = 'InputElement'
