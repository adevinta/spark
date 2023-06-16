import { useInputGroup } from '@spark-ui/input'
import { forwardRef, PropsWithChildren } from 'react'

import {
  textFieldFloatingLabelStyles,
  TextFieldFloatingLabelStylesProps,
} from './TextFieldFloatingLabel.styles'
import { TextFieldLabel, TextFieldLabelProps } from './TextFieldLabel'

export interface TextFieldFloatingLabelProps
  extends TextFieldLabelProps,
    TextFieldFloatingLabelStylesProps {}

export const TextFieldFloatingLabel = forwardRef<
  HTMLLabelElement,
  PropsWithChildren<TextFieldFloatingLabelProps>
>(({ className, isExpanded, ...others }, ref) => {
  const { isLeftElementVisible } = useInputGroup() || {}

  return (
    <TextFieldLabel
      ref={ref}
      className={textFieldFloatingLabelStyles({ className, isExpanded, isLeftElementVisible })}
      {...others}
    />
  )
})

TextFieldFloatingLabel.displayName = 'TextFieldFloatingLabel'
