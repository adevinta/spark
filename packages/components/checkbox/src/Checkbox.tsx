/* eslint-disable complexity */

import { useFormFieldState } from '@spark-ui/form-field'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { forwardRef, useRef } from 'react'

import { useCheckboxGroup } from './CheckboxGroupContext'
import { CheckboxInput, CheckboxInputProps } from './CheckboxInput'
import { CheckboxLabel } from './CheckboxLabel'

export type CheckboxProps = CheckboxInputProps

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      intent: intentProp,
      checked: checkedProp,
      value,
      disabled,
      onCheckedChange,
      children,
      ...others
    },
    forwardedRef
  ) => {
    const field = useFormFieldState()
    const group = useCheckboxGroup()
    const rootRef = useRef<HTMLButtonElement | undefined>()
    const ref = useMergeRefs(forwardedRef, rootRef)

    const name = field.name ?? group.name
    const isRequired = field.isRequired ?? group.isRequired
    const isInvalid = field.isInvalid ?? group.isInvalid
    const isField = field.id !== group.id
    const id = isField ? field.id : undefined
    const description = isField ? field.description : undefined
    const intent = isInvalid ? 'error' : intentProp ?? group.intent
    const checked = group.value && value ? group.value.includes(value) : checkedProp

    const handleCheckedChange = (checked: boolean) => {
      if (onCheckedChange) {
        onCheckedChange(checked)
      }

      const element = rootRef.current

      if (group.onChange && element?.value) {
        group.onChange(checked, element.value)
      }
    }

    return (
      <CheckboxLabel data-spark-component="checkbox" className={className} disabled={disabled}>
        <CheckboxInput
          ref={ref}
          id={id}
          name={name}
          value={value}
          intent={intent}
          checked={checked}
          disabled={disabled}
          required={isRequired}
          aria-describedby={description}
          aria-invalid={isInvalid}
          onCheckedChange={handleCheckedChange}
          {...others}
        />
        {children}
      </CheckboxLabel>
    )
  }
)

Checkbox.displayName = 'Checkbox'
