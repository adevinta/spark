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
    const {
      name = field.name,
      isRequired = field.isRequired,
      isInvalid = field.isInvalid,

      id: groupId,
      intent: groupIntent,
      value: groupValue,
      onCheckedChange: groupOnCheckedChange,
    } = useCheckboxGroup()
    const rootRef = useRef<HTMLButtonElement | undefined>()
    const ref = useMergeRefs(forwardedRef, rootRef)

    const isFieldEnclosed = field.id !== groupId
    const id = isFieldEnclosed ? field.id : undefined
    const description = isFieldEnclosed ? field.description : undefined
    const intent = isInvalid ? 'error' : intentProp ?? groupIntent
    const checked = groupValue && value ? groupValue.includes(value) : checkedProp

    const handleCheckedChange = (checked: boolean) => {
      if (onCheckedChange) {
        onCheckedChange(checked)
      }

      const element = rootRef.current

      if (groupOnCheckedChange && element?.value) {
        groupOnCheckedChange(checked, element.value)
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
