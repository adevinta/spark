import { useId } from '@radix-ui/react-id'
import { useCombinedState } from '@spark-ui/use-combined-state'
import { cx } from 'class-variance-authority'
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react'

import { inputStyles, labelTextStyles } from './Input.styles'
import { InputFieldset } from './InputFieldset'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  leftAddon?: ReactNode
  rightAddon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (
    {
      className,
      value: valueProp,
      defaultValue,
      placeholder,
      leftAddon,
      rightAddon,
      children,
      ...others
    },
    ref
  ) => {
    const id = useId()
    const [value, setValue] = useCombinedState(valueProp, defaultValue)
    const [isFocused, setIsFocused] = useState(false)
    const isExpanded = isFocused || !!value || !!placeholder || !!leftAddon

    const handleFocus = () => {
      setIsFocused(true)
    }

    const handleBlur = () => {
      setIsFocused(false)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    return (
      <div className={cx(inputStyles({ isFocused }), className)}>
        {leftAddon}
        <input
          id={id}
          ref={ref}
          value={value}
          placeholder={placeholder}
          className="box-content h-full w-full text-ellipsis bg-transparent outline-0"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...others}
        />
        <InputFieldset label={children} isExpanded={isExpanded} />

        <label htmlFor={id} className={labelTextStyles({ isExpanded })}>
          {children}
        </label>

        {rightAddon}
      </div>
    )
  }
)
