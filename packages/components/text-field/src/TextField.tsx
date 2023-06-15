import { useId } from '@radix-ui/react-id'
import { Input, InputProps, useInputGroup } from '@spark-ui/input'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ChangeEvent, FocusEvent, forwardRef, useRef, useState } from 'react'

import { textFieldStyles } from './TextField.styles'
import { TextFieldFieldset } from './TextFieldFieldset'
import { TextFieldLabel } from './TextFieldLabel'

export interface TextFieldProps extends InputProps {
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
      intent = 'neutral',
      children,
      ...others
    },
    forwardedRef
  ) => {
    const id = useId(idProp)
    const [isValueSet, setIsValueSet] = useState(!!value || !!defaultValue)
    const [isFocused, setIsFocused] = useState(false)
    const group = useInputGroup()
    const rootRef = useRef<HTMLInputElement | null>(null)
    const ref = useMergeRefs(rootRef, forwardedRef)

    const { isLeftAddonVisible = false } = group || {}
    const isGrouped = !!group
    const isExpanded = isFocused || isLeftAddonVisible || !!placeholder || isValueSet

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
        <Input
          id={id}
          ref={ref}
          intent="unstyled"
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...others}
        />

        {children}

        <TextFieldFieldset intent={intent} isExpanded={isExpanded} asChild>
          {label}
        </TextFieldFieldset>

        {label && (
          <TextFieldLabel htmlFor={id} isExpanded={isExpanded}>
            {label}
          </TextFieldLabel>
        )}
      </div>
    )
  }
)

TextField.displayName = 'TextField'
