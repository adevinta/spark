import * as RadixSlider from '@radix-ui/react-slider'
import { forwardRef } from 'react'

import { thumbStyles } from './SliderThumb.styles'

export interface SliderThumbProps extends RadixSlider.SliderThumbProps {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
}

export const SliderThumb = forwardRef<HTMLDivElement, SliderThumbProps>(
  ({ asChild = false, className, ...rest }, ref) => (
    <RadixSlider.Thumb
      ref={ref}
      asChild={asChild}
      className={thumbStyles({ className })}
      {...rest}
    />
  )
)

SliderThumb.displayName = 'Slider.Thumb'
