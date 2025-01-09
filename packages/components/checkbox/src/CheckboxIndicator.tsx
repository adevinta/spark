import {
  CheckboxIndicator as CheckboxIndicatorPrimitive,
  CheckboxIndicatorProps as CheckboxIndicatorPrimitiveProps,
} from '@radix-ui/react-checkbox'
import { RefObject } from 'react'

export type CheckboxIndicatorProps = CheckboxIndicatorPrimitiveProps & {
  ref?: RefObject<HTMLSpanElement>
}

export const CheckboxIndicator = (props: CheckboxIndicatorProps) => (
  <CheckboxIndicatorPrimitive className="flex size-full items-center justify-center" {...props} />
)

CheckboxIndicator.displayName = 'CheckboxIndicator'
