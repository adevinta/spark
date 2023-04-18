import React from 'react'

import { Input, type InputProps } from './SwitchInput'
import { Label } from './SwitchLabel'

export type SwitchProps = InputProps

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ value = 'on', size = 'md', children, ...rest }, ref) => {
    return (
      <Label data-spark-component="switch" disabled={rest.disabled}>
        <Input ref={ref} size={size} {...rest} />
        <div className="block">{children}</div>
      </Label>
    )
  }
)
