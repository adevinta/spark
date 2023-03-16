import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import React from 'react'

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root ref={ref} {...props}>
    <CheckboxPrimitive.Indicator>
      <span>✅</span>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
