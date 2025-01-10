import { RadioGroupIndicator as RadioIndicatorPrimitive } from '@radix-ui/react-radio-group'
import { Ref } from 'react'

import { radioIndicatorStyles, RadioIndicatorStylesProps } from './RadioIndicator.styles'

export interface RadioIndicatorProps extends RadioIndicatorStylesProps {
  className?: string
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true | undefined
  ref?: Ref<HTMLSpanElement>
}

export const RadioIndicator = ({ intent, className, ref, ...others }: RadioIndicatorProps) => {
  return (
    <RadioIndicatorPrimitive
      ref={ref}
      className={radioIndicatorStyles({ intent, className })}
      {...others}
    />
  )
}

RadioIndicator.displayName = 'RadioGroup.RadioIndicator'
