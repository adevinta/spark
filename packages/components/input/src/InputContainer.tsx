import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputStyles } from './Input.styles'

export interface InputProps extends ComponentPropsWithoutRef<'div'> {
  isFocused?: boolean
}

export const InputContainer = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  ({ className, isFocused, ...others }, ref) => {
    return <div ref={ref} className={cx(inputStyles({ isFocused }), className)} {...others} />
  }
)
