import {
  CheckboxIndicator as CheckboxIndicatorPrimitive,
  CheckboxIndicatorProps as CheckboxIndicatorPrimitiveProps,
} from '@radix-ui/react-checkbox'
import { forwardRef } from 'react'

export type CheckboxIndicatorProps = CheckboxIndicatorPrimitiveProps

export const CheckboxIndicator = forwardRef<HTMLSpanElement, CheckboxIndicatorProps>(
  (props, ref) => (
    <CheckboxIndicatorPrimitive
      ref={ref}
      className="text-surface flex items-center justify-center"
      {...props}
    />
  )
)

CheckboxIndicator.displayName = 'CheckboxIndicator'
