import * as RadixSlider from '@radix-ui/react-slider'
import { forwardRef } from 'react'

import { rangeStyles, trackStyles } from './SliderTrack.styles'

export interface SliderTrackProps
  extends RadixSlider.SliderTrackProps,
    RadixSlider.SliderRangeProps {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
}

export const SliderTrack = forwardRef<HTMLDivElement, SliderTrackProps>(
  ({ asChild = false, className, ...rest }, ref) => (
    <RadixSlider.Track ref={ref} asChild={asChild} className={trackStyles} {...rest}>
      <RadixSlider.Range className={rangeStyles({ className })} />
    </RadixSlider.Track>
  )
)

SliderTrack.displayName = 'Slider.Track'
