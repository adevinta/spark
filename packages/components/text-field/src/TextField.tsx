/* eslint-disable complexity */

import { useId } from '@radix-ui/react-id'
import { useFormFieldState } from '@spark-ui/form-field'
import {
  InputContainerProps,
  InputPrimitive,
  InputPrimitiveProps,
  useInputGroup,
} from '@spark-ui/input'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ChangeEvent, FocusEvent, forwardRef, ReactNode, useRef, useState } from 'react'

import { textFieldStyles } from './TextField.styles'
import { TextFieldFieldset } from './TextFieldFieldset'
import { TextFieldFloatingLabel } from './TextFieldFloatingLabel'
import { TextFieldLegend } from './TextFieldLegend'

export interface TextFieldProps extends InputPrimitiveProps, Pick<InputContainerProps, 'intent'> {
  elements?: ReactNode
  requiredIndicator?: ReactNode
  label: string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id: idProp,
      className,
      placeholder,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      label,
      intent: intentProp = 'neutral',
      requiredIndicator,
      elements,
      disabled,
      required,
      ...others
    },
    forwardedRef
  ) => {
    const id = useId(idProp)
    const [isValueSet, setIsValueSet] = useState(!!value || !!defaultValue)
    const [isFocused, setIsFocused] = useState(false)
    const rootRef = useRef<HTMLInputElement | null>(null)
    const ref = useMergeRefs(rootRef, forwardedRef)
    const field = useFormFieldState()
    const group = useInputGroup()

    const intent = field.isInvalid ? 'error' : intentProp
    const isGrouped = !!group
    const isRequired = field.isRequired ?? required
    const isDisabled = group?.isDisabled ?? disabled
    const isExpanded = isFocused || group?.isLeftAddonVisible || !!placeholder || isValueSet

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(event)
      }

      setIsFocused(true)
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(event)
      }

      setIsFocused(false)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event)
      }

      setIsValueSet(!!event.target.value)
    }

    return (
      <div className={textFieldStyles({ isGrouped })}>
        <InputPrimitive
          id={id}
          ref={ref}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          required={isRequired}
          disabled={isDisabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...others}
        />

        {elements}

        <TextFieldFieldset intent={intent}>
          <TextFieldLegend
            requiredIndicator={requiredIndicator}
            isExpanded={isExpanded}
            isRequired={isRequired}
          >
            {label}
          </TextFieldLegend>
        </TextFieldFieldset>

        {label && (
          <TextFieldFloatingLabel
            htmlFor={id}
            requiredIndicator={requiredIndicator}
            isExpanded={isExpanded}
            isRequired={isRequired}
          >
            {label}
          </TextFieldFloatingLabel>
        )}
      </div>
    )
  }
)

TextField.displayName = 'TextField'
