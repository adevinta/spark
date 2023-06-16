import { Label as LabelPrimitive, LabelProps as LabelPrimitiveProps } from '@radix-ui/react-label'
import { forwardRef } from 'react'

import { labelStyles, LabelStylesProps } from './Label.styles'

export interface LabelProps extends LabelPrimitiveProps, LabelStylesProps {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, intent = 'neutral', ...others }, ref) => {
    return (
      <LabelPrimitive
        ref={ref}
        data-spark-component="label"
        className={labelStyles({ className, intent })}
        {...others}
      />
    )
  }
)
