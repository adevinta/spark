import { RadioGroupIndicator as RadioIndicatorPrimitive } from '@radix-ui/react-radio-group'

import { radioIndicatorVariants, RadioIndicatorVariantsProps } from './RadioIndicator.variants'

export interface RadioIndicatorProps extends RadioIndicatorVariantsProps {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true | undefined
}

export const RadioIndicator = ({ intent, ...others }: RadioIndicatorProps) => {
  return <RadioIndicatorPrimitive className={radioIndicatorVariants({ intent })} {...others} />
}
