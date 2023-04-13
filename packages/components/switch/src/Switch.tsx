import React from 'react'

import { Input, type InputProps } from './SwitchInput'
import { Label } from './SwitchLabel'

export type SwitchProps = InputProps

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ value = 'on', size = 'md', children, ...rest }, ref) => {
    return (
      <Label disabled={rest.disabled}>
        <Input ref={ref} size={size} {...rest} />
        {children}
      </Label>
    )
  }
)
