import { RadioGroupItem as RadioPrimitive } from '@radix-ui/react-radio-group'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { radioVariants, RadioVariantsProps } from './Radio.variants'
import { RadioIndicator } from './RadioIndicator'
import { useRadioGroup } from './useRadioGroup'

export interface RadioProps
  extends RadioVariantsProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * The value given as data when submitted with a name.
   */
  value: string
  /**
   * When true, prevents the user from interacting with the radio item.
   */
  disabled?: boolean
  /**
   * When true, indicates that the user must check the radio item before the owning form can be submitted.
   */
  required?: boolean
}

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ intent: intentProp, size: sizeProp, ...others }, ref) => {
    const context = useRadioGroup()
    const intent = intentProp || context.intent
    const size = sizeProp || context.size

    return (
      <RadioPrimitive ref={ref} className={radioVariants({ size, intent })} {...others}>
        <RadioIndicator intent={intent} size={size} forceMount />
      </RadioPrimitive>
    )
  }
)
