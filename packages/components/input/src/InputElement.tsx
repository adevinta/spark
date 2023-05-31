import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputElementStyles } from './InputElement.styles'
import { useInputGroup } from './InputGroupContext'

export type InputElementProps = ComponentPropsWithoutRef<'div'>

export const InputElement = forwardRef<HTMLDivElement, PropsWithChildren<InputElementProps>>(
  ({ className, ...others }, ref) => {
    const { isFocused } = useInputGroup() || {}

    return (
      <div
        ref={ref}
        className={inputElementStyles({ className, isFocused: !!isFocused })}
        {...others}
      />
    )
  }
)

InputElement.displayName = 'InputElement'
