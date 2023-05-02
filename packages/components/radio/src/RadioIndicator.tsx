import { RadioGroupIndicator as RadioIndicatorPrimitive } from '@radix-ui/react-radio-group'
import { forwardRef } from 'react'

import { radioIndicatorVariants, RadioIndicatorVariantsProps } from './RadioIndicator.variants'

export interface RadioIndicatorProps extends RadioIndicatorVariantsProps {
  className?: string
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true | undefined
}

export const RadioIndicator = forwardRef<HTMLSpanElement, RadioIndicatorProps>(
  ({ intent, size, className, ...others }, ref) => {
    return (
      <RadioIndicatorPrimitive
        ref={ref}
        className={radioIndicatorVariants({ intent, size, className })}
        {...others}
      />
    )
  }
)
