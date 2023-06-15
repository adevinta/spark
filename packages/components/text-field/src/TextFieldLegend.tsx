import { ComponentPropsWithoutRef } from 'react'

import { textFieldLegendStyles, TextFieldLegendStylesProps } from './TextFieldLegend.styles'

export interface TextFieldLegendProps
  extends ComponentPropsWithoutRef<'legend'>,
    TextFieldLegendStylesProps {}

export const TextFieldLegend = ({ className, isExpanded, ...others }: TextFieldLegendProps) => {
  return <legend className={textFieldLegendStyles({ className, isExpanded })} {...others} />
}
