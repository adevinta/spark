import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import React from 'react'

import { CheckboxInput, type CheckboxInputProps } from './CheckboxInput'
import { CheckboxLabel } from './CheckboxLabel'

export type CheckboxProps = CheckboxInputProps

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ children, ...props }, ref) => (
  <CheckboxLabel disabled={props.disabled}>
    <CheckboxInput ref={ref} {...props} />
    {children}
  </CheckboxLabel>
))
