import { RadioGroupItem as RadioPrimitive } from '@radix-ui/react-radio-group'
import { useFormControl } from '@spark-ui/form-control'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { RadioIndicator } from './RadioIndicator'
import { radioInputVariants, RadioInputVariantsProps } from './RadioInput.styles'

export interface RadioInputProps
  extends RadioInputVariantsProps,
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

export const RadioInput = forwardRef<HTMLButtonElement, RadioInputProps>(
  ({ intent: intentProp, size, className, ...others }, ref) => {
    const { isInvalid, description } = useFormControl()

    const intent = isInvalid ? 'error' : intentProp

    return (
      <RadioPrimitive
        ref={ref}
        className={radioInputVariants({ size, intent, className })}
        aria-invalid={isInvalid}
        aria-describedby={description}
        {...others}
      >
        <RadioIndicator intent={intent} size={size} forceMount />
      </RadioPrimitive>
    )
  }
)

RadioInput.displayName = 'RadioInput'
