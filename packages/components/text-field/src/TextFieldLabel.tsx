import { useInputGroup } from '@spark-ui/input'
import { Label, LabelProps } from '@spark-ui/label'
import { forwardRef, PropsWithChildren } from 'react'

import { textFieldLabelStyles, TextFieldLabelStylesProps } from './TextFieldLabel.styles'

export interface TextFieldLabelProps extends LabelProps, TextFieldLabelStylesProps {}

export const TextFieldLabel = forwardRef<HTMLLabelElement, PropsWithChildren<TextFieldLabelProps>>(
  ({ className, isExpanded, ...others }, ref) => {
    const { isLeftElementVisible } = useInputGroup() || {}

    return (
      <Label
        ref={ref}
        className={textFieldLabelStyles({ className, isExpanded, isLeftElementVisible })}
        {...others}
      />
    )
  }
)

TextFieldLabel.displayName = 'TextFieldLabel'
