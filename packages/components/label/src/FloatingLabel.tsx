import { forwardRef, PropsWithChildren } from 'react'

import { floatingLabelStyles, FloatingLabelStylesProps } from './FloatingLabel.styles'
import { Label, LabelProps } from './Label'

export interface FloatingLabelProps extends LabelProps, FloatingLabelStylesProps {
  isExpanded: boolean
  isLeftElementVisible: boolean
}

export const FloatingLabel = forwardRef<HTMLLabelElement, PropsWithChildren<FloatingLabelProps>>(
  ({ className, isExpanded, isLeftElementVisible, ...others }, ref) => {
    return (
      <Label
        ref={ref}
        className={floatingLabelStyles({ className, isExpanded, isLeftElementVisible })}
        {...others}
      />
    )
  }
)

FloatingLabel.displayName = 'FloatingLabel'
