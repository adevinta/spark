import { Checkbox as CheckboxPrimitive } from '@radix-ui/react-checkbox'
import { useFormFieldState } from '@spark-ui/form-field'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { Minus } from '@spark-ui/icons/dist/icons/Minus'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ComponentPropsWithoutRef, forwardRef, ReactNode, useRef, useState } from 'react'

import { useCheckboxGroup } from './CheckboxGroupContext'
import { CheckboxIndicator } from './CheckboxIndicator'
import { checkboxInputStyles, type CheckboxInputStylesProps } from './CheckboxInput.styles'

type CheckedStatus = boolean | 'indeterminate'

type InnerCheckedStatus = 'true' | 'false' | 'mixed' | undefined

export interface CheckboxInputProps
  extends CheckboxInputStylesProps,
    Omit<ComponentPropsWithoutRef<'button'>, 'value' | 'checked' | 'defaultChecked'> {
  /**
   * The checked icon to use
   */
  icon?: ReactNode
  /**
   * The inderteminate icon to use
   */
  inderteminateIcon?: ReactNode
  /**
   * The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state.
   */
  defaultChecked?: CheckedStatus
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
  onCheckedChange?: (checked: boolean, indeterminate?: boolean) => void
}

export const CheckboxInput = forwardRef<HTMLButtonElement, CheckboxInputProps>(
  (
    {
      className,
      icon = <Check />,
      inderteminateIcon = <Minus />,
      intent: intentProp,
      checked: checkedProp,
      value,
      onChange: onChangeProp,
      onCheckedChange,
      ...others
    },
    forwardedRef
  ) => {
    const field = useFormFieldState()
    const group = useCheckboxGroup()
    const [innerChecked, setInnerChecked] = useState<InnerCheckedStatus>()
    const rootRef = useRef<HTMLButtonElement | undefined>()
    const ref = useMergeRefs(forwardedRef, rootRef, node => {
      setInnerChecked(node?.getAttribute('aria-checked') as InnerCheckedStatus)
    })

    const { name, description } = field
    const isRequired = field.isRequired !== undefined ? field.isRequired : group.isRequired
    const isInvalid = field.isInvalid !== undefined ? field.isInvalid : group.isInvalid
    const intent = isInvalid ? 'error' : intentProp
    const checked = group.value && value ? group.value.includes(value) : checkedProp

    const handleCheckedChange = (status: CheckedStatus) => {
      const isChecked = status === 'indeterminate' ? false : status
      const isIndeterminate = status === 'indeterminate' ? true : undefined

      if (onCheckedChange) {
        onCheckedChange(isChecked, isIndeterminate)
      }

      const element = rootRef.current

      if (group.onChange && element?.value) {
        group.onChange(isChecked, element.value)
      }
    }

    return (
      <CheckboxPrimitive
        ref={ref}
        className={checkboxInputStyles({ intent, className })}
        name={name}
        value={value}
        checked={checked}
        aria-describedby={description}
        aria-invalid={isInvalid}
        required={isRequired}
        onCheckedChange={handleCheckedChange}
        {...others}
      >
        <CheckboxIndicator>
          {innerChecked === 'true' && icon}
          {innerChecked === 'mixed' && inderteminateIcon}
        </CheckboxIndicator>
      </CheckboxPrimitive>
    )
  }
)

CheckboxInput.displayName = 'CheckboxInput'
