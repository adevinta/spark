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
    const isFieldEnclosed = field.id !== group.id
    const id = isFieldEnclosed ? field.id : undefined
    const description = isFieldEnclosed ? field.description : undefined

    const intent = (() => {
      if (isInvalid) return 'error'

      return intentProp ?? group.intent
    })()

    const checked = group.value && value ? group.value.includes(value) : checkedProp

    const handleCheckedChange = (isChecked: boolean) => {
      if (onCheckedChange) onCheckedChange(isChecked)

      const rootRefValue = rootRef.current?.value

      if (!rootRefValue || !group.onCheckedChange) return

      group.onCheckedChange(isChecked, rootRefValue)
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
