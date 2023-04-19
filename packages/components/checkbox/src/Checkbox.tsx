import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import React from 'react'

import { Input, type InputProps } from './CheckboxInput'
import { Label } from './CheckboxLabel'

export type CheckboxProps = InputProps

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ children, ...props }, ref) => (
  <Label data-spark-component="checkbox" disabled={props.disabled}>
    <Input ref={ref} {...props} />
    {children}
  </Label>
))
