import { Label } from '@radix-ui/react-label'
import { useCombinedState } from '@spark-ui/use-combined-state'
import React, { forwardRef, InputHTMLAttributes, PropsWithChildren, useState } from 'react'

import {
  inputStyles,
  type InputStylesProps,
  labelStyles,
  labelTextMandatoryStyles,
  labelTextStyles,
} from './Input.styles'
import { InputFieldset } from './InputFieldset'

export interface InputProps
  extends PropsWithChildren<
      Omit<
        InputHTMLAttributes<HTMLInputElement>,
        'disabled' | 'placeholder' | 'label' | 'value' | 'defaultValue'
      >
    >,
    InputStylesProps {
  mandatory?: boolean | string
  disabled?: boolean
  placeholder?: string
  htmlSize?: number
  value?: string | number
  defaultValue?: string | number
  onValueChange?: (value: string) => void
}

const useIsExpanded = ({ label, mandatory, placeholder, value, focus }) => {
  if (value || focus || placeholder) {
    return false
  }

  return true
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, mandatory, htmlSize, intent, placeholder, children, onValueChange, ...props },
    forwardedRef
  ) => {
    const [value, setValue] = useCombinedState(props.value, props.defaultValue)
    const onChangeHandler = event => {
      const value = event.target.value.slice(0, htmlSize)
      setValue(value)
      typeof onValueChange === 'function' && onValueChange(value)
    }
    const [focus, setFocus] = useState(false)
    const handleFocus = (value, callback) => event => {
      setFocus(value)
      typeof callback === 'function' && callback(event)
    }
    const isExpanded = useIsExpanded({ label: children, mandatory, placeholder, value, focus })

    return (
      <Label
        data-spark-component="text-input"
        className={labelStyles({ intent, size: htmlSize, disabled: props.disabled })}
      >
        <input
          {...props}
          onFocus={handleFocus(true, props.onFocus)}
          onBlur={handleFocus(false, props.onBlur)}
          onChange={onChangeHandler}
          ref={forwardedRef}
          className={inputStyles()}
          placeholder={placeholder}
          size={htmlSize}
          value={value}
        />
        <InputFieldset
          label={children}
          mandatory={mandatory}
          placeholder={placeholder}
          value={value}
          isExpanded={isExpanded}
        />
        <span className={labelTextStyles({ isExpanded, intent })}>
          <div>
            {children}
            {children && mandatory ? <>&nbsp;</> : undefined}
            {mandatory ? (
              <span className={labelTextMandatoryStyles({ isExpanded })}>
                {mandatory === true ? '*' : `${mandatory}`}
              </span>
            ) : undefined}
          </div>
        </span>
      </Label>
    )
  }
)

Input.displayName = 'Input'
