import React from 'react'

import { CheckboxInput, CheckboxInputProps } from './CheckboxInput'
import { CheckboxLabel } from './CheckboxLabel'

export type CheckboxProps = CheckboxInputProps

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ children, className, disabled, ...others }, ref) => {
    return (
      <CheckboxLabel data-spark-component="checkbox" className={className} disabled={disabled}>
        <CheckboxInput ref={ref} disabled={disabled} {...others} />
        {children}
      </CheckboxLabel>
    )
  }
)

Checkbox.displayName = 'Checkbox'
