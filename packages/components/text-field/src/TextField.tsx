import { useId } from '@radix-ui/react-id'
import { Input, InputProps, useInputGroup } from '@spark-ui/input'
import { FloatingLabel } from '@spark-ui/label'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ChangeEvent, FocusEvent, forwardRef, PropsWithChildren, useRef, useState } from 'react'

import { textFieldStyles } from './TextField.styles'

export type TextFieldProps = InputProps

export const TextField = forwardRef<HTMLInputElement, PropsWithChildren<TextFieldProps>>(
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
      children,
      disabled,
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
    const {
      isDisabled: isInputGroupDisabled,
      isLeftAddonVisible = false,
      isLeftElementVisible = false,
    } = group || {}
    const isDisabled = disabled || isInputGroupDisabled
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
      <div className={textFieldStyles({ isGrouped, isExpanded, isLeftAddonVisible })}>
        <Input
          id={id}
          ref={ref}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          disabled={isDisabled}
          {...others}
        />

        {children && (
          <FloatingLabel
            htmlFor={id}
            isExpanded={isExpanded}
            isLeftElementVisible={isLeftElementVisible}
            isLeftAddonVisible={isLeftAddonVisible}
            isDisabled={isDisabled}
          >
            {children}
          </FloatingLabel>
        )}
      </div>
    )
  }
)

TextField.displayName = 'TextField'
