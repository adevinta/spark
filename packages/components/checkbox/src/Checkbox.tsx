/* eslint-disable complexity */
import { useId } from '@radix-ui/react-id'
import { useFormFieldState } from '@spark-ui/form-field'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { cx } from 'class-variance-authority'
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
    const innerId = useId()
    const innerLabelId = useId()

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

    const intent = isInvalid ? 'error' : intentProp ?? group.intent
    const checked = group.value && value ? group.value.includes(value) : checkedProp

    const handleCheckedChange = (isChecked: boolean) => {
      onCheckedChange?.(isChecked)
      rootRef.current?.value && group.onCheckedChange?.(isChecked, rootRef.current.value)
    }

    return (
      <div
        data-spark-component="checkbox"
        className={cx('gap-md text-body-1 flex items-center', className)}
      >
        <CheckboxInput
          ref={ref}
          id={id || innerId}
          name={name}
          value={value}
          intent={intent}
          checked={checked}
          disabled={disabled}
          required={isRequired}
          aria-describedby={description}
          aria-invalid={isInvalid}
          onCheckedChange={handleCheckedChange}
          /**
           * If the checkbox doesn't have any direct label (children) then we should try to
           * get an eventual alternative label from FormField.
           * On last resort, we shouldn't forget to define an aria-label attribute.
           */
          aria-labelledby={children ? innerLabelId : field.labelId}
          {...others}
        />

        {children && (
          <CheckboxLabel disabled={disabled} htmlFor={id || innerId} id={innerLabelId}>
            {children}
          </CheckboxLabel>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
