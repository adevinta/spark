import * as SwitchPrimitive from '@radix-ui/react-switch'
import { Check } from '@spark-ui/icons'
import { Slot } from '@spark-ui/slot'
import React from 'react'

import { styles, type StylesProps, thumbCheckSVGStyles, thumbStyles } from './SwitchInput.styles'

interface RadixProps {
  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean
  /**
   * When true, prevents the user from interacting with the switch.
   */
  disabled?: boolean
  /**
   * When true, indicates that the user must check the switch before the owning form can be submitted.
   */
  required?: boolean
  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * The value given as data when submitted with a name.
   */
  value?: string
  /**
   * The controlled state of the switch. Must be used in conjunction with `onCheckedChange`.
   */
  checked?: boolean
  /**
   * Event handler called when the state of the switch changes.
   */
  onCheckedChange?: (checked: boolean) => void
}

export interface InputProps
  extends RadixProps,
    StylesProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {}

export const Input = React.forwardRef<HTMLButtonElement, InputProps>(
  ({ intent, value = 'on', size = 'md', ...rest }, ref) => {
    return (
      <SwitchPrimitive.Root ref={ref} className={styles({ intent, size })} value={value} {...rest}>
        <SwitchPrimitive.Thumb className={thumbStyles({ size })}>
          <Slot className={thumbCheckSVGStyles({ size })}>
            <Check />
          </Slot>
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
    )
  }
)
