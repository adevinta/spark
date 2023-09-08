import * as RadixSlider from '@radix-ui/react-slider'
import { forwardRef } from 'react'

import { useSliderContext } from './SliderContext'
import { thumbVariants } from './SliderThumb.styles'

export interface SliderThumbProps extends RadixSlider.SliderThumbProps {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
}

export const SliderThumb = forwardRef<HTMLDivElement, SliderThumbProps>(
  ({ asChild = false, className, ...rest }, ref) => {
    const { intent } = useSliderContext()

    return (
      <RadixSlider.Thumb
        ref={ref}
        asChild={asChild}
        className={thumbVariants({ intent, className })}
        {...rest}
      />
    )
  }
)

SliderThumb.displayName = 'Slider.Thumb'
