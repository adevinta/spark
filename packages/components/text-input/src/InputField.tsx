import { Slot } from '@spark-ui/slot'
import React, { forwardRef, PropsWithChildren } from 'react'

import { type InputProps } from './Input'
import { inputFieldStyles } from './InputField.styles'

export interface InputFieldProps extends PropsWithChildren, Omit<InputProps, 'label'> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
}

export const InputField = forwardRef<HTMLElement, InputFieldProps>(
  ({ asChild, intent, className, children, ...props }, forwardedRef) => {
    const Element = asChild ? Slot : 'span'

    return (
      <Element
        ref={forwardedRef}
        className={inputFieldStyles({ className, intent, disabled: props.disabled })}
        {...props}
      >
        {children}
      </Element>
    )
  }
)

InputField.displayName = 'InputField'
