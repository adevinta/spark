import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputContainerStyles, InputContainerStylesProps } from './InputContainer.styles'

export interface InputContainerProps
  extends ComponentPropsWithoutRef<'div'>,
    InputContainerStylesProps {
  asChild?: boolean
}

export const InputContainer = forwardRef<HTMLDivElement, PropsWithChildren<InputContainerProps>>(
  ({ className, intent, isFocused, isHovered, isDisabled, asChild = false, ...others }, ref) => {
    const Component = asChild ? Slot : 'div'

    return (
      <Component
        ref={ref}
        className={inputContainerStyles({ className, intent, isDisabled, isFocused, isHovered })}
        {...others}
      />
    )
  }
)

InputContainer.displayName = 'InputContainer'
