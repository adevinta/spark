import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from '@spark-ui/icons'
import React, { ReactNode } from 'react'

import { inputStyles, type InputStylesProps } from './CheckboxInput.styles'

interface RadixProps {
  /**
   * The checked icon to use
   */
  icon?: ReactNode
  /**
   * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
   */
  defaultChecked?: boolean
  /**
   * The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.
   */
  checked?: boolean
  /**
   * Event handler called when the checked state of the checkbox changes.
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * When true, prevents the user from interacting with the checkbox.
   */
  disabled?: boolean
  /**
   * When true, indicates that the user must check the checkbox before the owning form can be submitted.
   */
  required?: boolean
  /**
   * The name of the checkbox. Submitted with its owning form as part of a name/value pair.
   */
  name?: string
}

export interface InputProps
  extends RadixProps, // Radix props
    InputStylesProps, // CVA props (variants)
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {} // Native HTML props

export const Input = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, InputProps>(
  ({ intent, icon = <Check />, ...props }, ref) => (
    <CheckboxPrimitive.Root ref={ref} className={inputStyles({ intent })} {...props}>
      <CheckboxPrimitive.Indicator className="text-surface flex items-center justify-center">
        {icon}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
)
