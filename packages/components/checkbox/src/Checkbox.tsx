/* eslint-disable complexity */

import { useId } from '@radix-ui/react-id'
import { useFormFieldControl } from '@spark-ui/form-field'
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

    const field = useFormFieldControl()
    const group = useCheckboxGroup()

    const rootRef = useRef<HTMLButtonElement | undefined>()
    const ref = useMergeRefs(forwardedRef, rootRef)

    const getCheckboxAttributes = ({
      fieldState,
      groupState,
      checkboxIntent,
    }: {
      fieldState: ReturnType<typeof useFormFieldControl>
      groupState: ReturnType<typeof useCheckboxGroup>
      checkboxIntent: CheckboxInputProps['intent']
    }) => {
      const name = fieldState.name ?? groupState.name
      const isRequired = fieldState.isRequired ?? groupState.isRequired
      const state = fieldState.state ?? groupState.state
      const isInvalid = fieldState.isInvalid ?? groupState.isInvalid

      const isFieldEnclosed = fieldState.id !== groupState.id
      const id = isFieldEnclosed ? fieldState.id : undefined
      const description = isFieldEnclosed ? fieldState.description : undefined

      const intent = state ?? checkboxIntent ?? groupState.intent

      return { name, isRequired, isInvalid, id, description, intent }
    }

    const checked = value ? group.value?.includes(value) : checkedProp

    const handleCheckedChange = (isChecked: boolean) => {
      onCheckedChange?.(isChecked)

      const rootRefValue = rootRef.current?.value
      if (rootRefValue && group.onCheckedChange) {
        group.onCheckedChange(isChecked, rootRefValue)
      }
    }

    const { id, name, isInvalid, isRequired, description, intent } = getCheckboxAttributes({
      fieldState: field,
      groupState: group,
      checkboxIntent: intentProp,
    })

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
