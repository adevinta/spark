import { Label } from '@radix-ui/react-label'
import { useCombinedState } from '@spark-ui/use-combined-state'
import React, {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  useState,
} from 'react'

import {
  inputStyles,
  type InputStylesProps,
  labelStyles,
  labelTextMandatoryStyles,
  labelTextStyles,
} from './Input.styles'
import { InputFieldset } from './InputFieldset'

export interface InputProps
  extends PropsWithChildren<Omit<InputHTMLAttributes<HTMLInputElement>, 'label'>>,
    Omit<InputStylesProps, 'disabled'> {
  mandatory?: boolean | string
  htmlSize?: number
  onValueChange?: (value: string) => void
}

const useIsExpanded = ({
  // label,
  // mandatory,
  placeholder,
  value,
  focus,
}: Pick<InputProps, 'mandatory' | 'placeholder' | 'value'> & {
  label: React.ReactNode
  focus: boolean
}) => {
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
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target?.value?.slice(0, htmlSize)
      setValue(value)
      typeof onValueChange === 'function' && onValueChange(value)
    }
    const [focus, setFocus] = useState(false)
    const handleEvent =
      (value: boolean, callback?: (event: FocusEvent<HTMLInputElement>) => void) =>
      (event: FocusEvent<HTMLInputElement>) => {
        setFocus(value)
        typeof callback === 'function' && callback(event)
      }
    const isExpanded = useIsExpanded({ label: children, mandatory, placeholder, value, focus })

    return (
      <Label
        data-spark-component="text-input"
        className={labelStyles({
          intent,
          applyDefaultSize: htmlSize === undefined,
          disabled: props.disabled,
        })}
      >
        <input
          {...props}
          onFocus={handleEvent(true, props.onFocus)}
          onBlur={handleEvent(false, props.onBlur)}
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
