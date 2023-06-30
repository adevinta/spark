import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputContainerStyles, InputContainerStylesProps } from './InputContainer.styles'

export interface InputContainerProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputContainerStylesProps, 'intent'> {
  asChild?: boolean
  state?: 'error' | 'alert' | 'success'
}

export const InputContainer = forwardRef<HTMLDivElement, PropsWithChildren<InputContainerProps>>(
  ({ className, state, asChild, ...others }, ref) => {
    const Component = asChild ? Slot : 'div'

    return (
      <Component
        ref={ref}
        className={inputContainerStyles({ intent: state, className })}
        {...others}
      />
    )
  }
)

InputContainer.displayName = 'InputContainer'
