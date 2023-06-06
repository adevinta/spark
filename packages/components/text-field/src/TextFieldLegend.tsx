import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { textFieldLegendStyles, TextFieldLegendStylesProps } from './TextFieldLegend.styles'

export interface TextFieldLegendProps
  extends ComponentPropsWithoutRef<'legend'>,
    TextFieldLegendStylesProps {}

export const TextFieldLegend = forwardRef<
  HTMLLegendElement,
  PropsWithChildren<TextFieldLegendProps>
>(({ className, isExpanded, ...others }, ref) => {
  return (
    <legend ref={ref} className={textFieldLegendStyles({ className, isExpanded })} {...others} />
  )
})

TextFieldLegend.displayName = 'TextFieldLegend'
