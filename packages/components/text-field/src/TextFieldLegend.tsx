import { ComponentPropsWithoutRef } from 'react'

import { TextFieldLabel, TextFieldLabelProps } from './TextFieldLabel'
import { textFieldLegendStyles, TextFieldLegendStylesProps } from './TextFieldLegend.styles'

export interface TextFieldLegendProps
  extends ComponentPropsWithoutRef<'legend'>,
    TextFieldLegendStylesProps,
    Pick<TextFieldLabelProps, 'isRequired' | 'requiredIndicator'> {}

export const TextFieldLegend = ({
  className,
  requiredIndicator,
  isExpanded,
  isRequired,
  ...others
}: TextFieldLegendProps) => {
  return (
    <TextFieldLabel
      className={textFieldLegendStyles({ className, isExpanded })}
      requiredIndicator={requiredIndicator}
      isRequired={isRequired}
      asChild
    >
      <legend {...others} />
    </TextFieldLabel>
  )
}
