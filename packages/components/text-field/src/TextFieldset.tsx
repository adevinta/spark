import { InputContainer, InputContainerProps } from '@spark-ui/input'
import { forwardRef, PropsWithChildren } from 'react'

import { textFieldsetStyles, TextFieldsetStylesProps } from './TextFieldset.styles'

export interface TextFieldsetProps
  extends Omit<InputContainerProps, 'asChild'>,
    TextFieldsetStylesProps {}

export const TextFieldset = forwardRef<HTMLDivElement, PropsWithChildren<TextFieldsetProps>>(
  ({ className, isExpanded, children, ...others }, ref) => {
    return (
      <InputContainer
        ref={ref}
        aria-hidden="true"
        className={textFieldsetStyles({ className, isExpanded })}
        asChild
        {...others}
      >
        <fieldset>{children}</fieldset>
      </InputContainer>
    )
  }
)

TextFieldset.displayName = 'TextFieldset'
