import * as RadixSlider from '@radix-ui/react-slider'
import { forwardRef } from 'react'

import { useSliderContext } from './SliderContext'
import { rangeVariants, trackVariants } from './SliderTrack.styles'

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
  ({ asChild = false, className, ...rest }, ref) => {
    const { intent, shape } = useSliderContext()

    return (
      <RadixSlider.Track ref={ref} asChild={asChild} className={trackVariants({ shape })} {...rest}>
        <RadixSlider.Range className={rangeVariants({ intent, shape, className })} />
      </RadixSlider.Track>
    )
  }
)

SliderTrack.displayName = 'Slider.Track'
