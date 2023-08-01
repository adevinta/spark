import { RadioGroup as RadioGroupPrimitive } from '@radix-ui/react-radio-group'
import { useFormFieldControl } from '@spark-ui/form-field'
import { forwardRef, HTMLAttributes } from 'react'

import { radioGroupStyles, RadioGroupVariantsProps } from './RadioGroup.styles'
import { RadioGroupProvider } from './RadioGroupProvider'
import { RadioInputVariantsProps } from './RadioInput.styles'

export interface RadioGroupProps
  extends RadioGroupVariantsProps,
    Pick<RadioInputVariantsProps, 'intent'>,
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

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      orientation = 'vertical',
      loop = true,
      intent,
      disabled,
      className,
      required: requiredProp,
      ...others
    },
    ref
  ) => {
    const { labelId, isInvalid, isRequired, description, name } = useFormFieldControl()
    const required = requiredProp !== undefined ? requiredProp : isRequired

    return (
      <RadioGroupProvider intent={intent} disabled={disabled}>
        <RadioGroupPrimitive
          data-spark-component="radio-group"
          className={radioGroupStyles({ orientation, className })}
          name={name}
          ref={ref}
          disabled={disabled}
          orientation={orientation}
          loop={loop}
          required={required}
          aria-labelledby={labelId}
          aria-invalid={isInvalid}
          aria-required={required}
          aria-describedby={description}
          {...others}
        />
      </RadioGroupProvider>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
