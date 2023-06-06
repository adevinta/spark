import { useId } from '@radix-ui/react-id'
import { Input, InputProps, useInputGroup } from '@spark-ui/input'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ChangeEvent, FocusEvent, forwardRef, PropsWithChildren, useRef, useState } from 'react'

import { textFieldStyles } from './TextField.styles'
import { TextFieldLabel } from './TextFieldLabel'
import { TextFieldLegend } from './TextFieldLegend'
import { TextFieldset } from './TextFieldset'

export type TextFieldProps = InputProps

export const TextField = forwardRef<HTMLInputElement, PropsWithChildren<TextFieldProps>>(
  (
    {
      id: idProp,
      className,
      placeholder,
      value,
      defaultValue,
      intent,
      onChange,
      onFocus,
      onBlur,
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

    const { isLeftAddonVisible = false, isHovered = false } = group || {}
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
          className="w-full"
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          intent="none"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...others}
        />

        <TextFieldset intent={intent} isFocused={isFocused} isHovered={isHovered}>
          <TextFieldLegend isExpanded={isExpanded}>{children}</TextFieldLegend>
        </TextFieldset>

        {children && (
          <TextFieldLabel htmlFor={id} isExpanded={isExpanded}>
            {children}
          </TextFieldLabel>
        )}
      </div>
    )
  }
)

TextField.displayName = 'TextField'
