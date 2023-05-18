import { Checkbox as CheckboxPrimitive } from '@radix-ui/react-checkbox'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Minus } from '@spark-ui/icons/dist/icons/Minus'
import { ComponentPropsWithoutRef, forwardRef, ReactNode } from 'react'

import { CheckboxIndicator } from './CheckboxIndicator'
import { checkboxInputStyles, type CheckboxInputStylesProps } from './CheckboxInput.styles'

type CheckedStatus = boolean | 'indeterminate'

export interface CheckboxInputProps
  extends CheckboxInputStylesProps,
    Omit<ComponentPropsWithoutRef<'button'>, 'value' | 'checked' | 'defaultChecked'> {
  /**
   * The checked icon to use.
   */
  icon?: ReactNode
  /**
   * The inderteminate icon to use.
   */
  inderteminateIcon?: ReactNode
  /**
   * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
   */
  defaultChecked?: boolean
  /**
   * The controlled checked state of the checkbox. Must be used in conjunction with onCheckedChange.
   */
  checked?: CheckedStatus
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
  /**
   * The value given as data when submitted with a name.
   */
  value?: string
  /**
   * Event handler called when the checked state of the checkbox changes.
   */
  onCheckedChange?: (checked: boolean) => void
}

export const CheckboxInput = forwardRef<HTMLButtonElement, CheckboxInputProps>(
  (
    { className, icon = <Check />, inderteminateIcon = <Minus />, intent, checked, ...others },
    ref
  ) => {
    return (
      <CheckboxPrimitive
        ref={ref}
        className={checkboxInputStyles({ intent, className })}
        checked={checked}
        {...others}
      >
        <CheckboxIndicator>
          {checked === 'indeterminate' ? inderteminateIcon : icon}
        </CheckboxIndicator>
      </CheckboxPrimitive>
    )
  }
)

CheckboxInput.displayName = 'CheckboxInput'
