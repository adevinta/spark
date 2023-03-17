import { RadioGroup as RadioGroupPrimitive } from '@radix-ui/react-radio-group'
import { HTMLAttributes } from 'react'

import { RadioVariantsProps } from './Radio.variants'
import { RadioGroupProvider } from './RadioGroupProvider'

export interface RadioGroupProps
  extends Pick<RadioVariantsProps, 'intent' | 'size'>,
    Omit<HTMLAttributes<HTMLDivElement>, 'value' | 'defaultValue' | 'dir'> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items.
   */
  defaultValue?: string
  /**
   * The controlled value of the radio item to check. Should be used in conjunction with onValueChange.
   */
  value?: string
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void
  /**
   * When true, prevents the user from interacting with radio items.
   */
  disabled?: boolean
  /**
   * The name of the group. Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * When true, indicates that the user must check a radio item before the owning form can be submitted.
   */
  required?: boolean
  /**
   * The orientation of the component.
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * The reading direction of the radio group.
   */
  dir?: 'ltr' | 'rtl'
  /**
   * When true, keyboard navigation will loop from last item to first, and vice versa.
   */
  loop?: boolean
}

export const RadioGroup = ({ loop = true, intent, size, ...others }: RadioGroupProps) => {
  return (
    <RadioGroupProvider intent={intent} size={size}>
      <RadioGroupPrimitive {...others} />
    </RadioGroupProvider>
  )
}
