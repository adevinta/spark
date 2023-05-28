import { useId } from '@radix-ui/react-id'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { FocusEvent, forwardRef, PropsWithChildren, useRef, useState } from 'react'

import { Input, InputProps } from './Input'
import { useInputGroup } from './InputGroupContext'
import { textFieldStyles } from './TextField.styles'
import { TextFieldLabel } from './TextFieldLabel'

export type TextFieldProps = InputProps

export const TextField = forwardRef<HTMLInputElement, PropsWithChildren<TextFieldProps>>(
  (
    {
      id: idProp,
      className,
      placeholder,
      value,
      defaultValue,
      onFocus,
      onBlur,
      children,
      ...others
    },
    forwardedRef
  ) => {
    const id = useId(idProp)
    const [isFocused, setIsFocused] = useState(false)
    const group = useInputGroup()
    const rootRef = useRef<HTMLInputElement | null>(null)
    const ref = useMergeRefs(rootRef, forwardedRef)

    const { isLeftAddonVisible = false } = group || {}
    const isGrouped = !!group
    const isValueSet = !!value || !!defaultValue || !!rootRef.current?.value
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

    return (
      <div className={textFieldStyles({ isGrouped })}>
        <Input
          id={id}
          ref={ref}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...others}
        />

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
