import * as RadixSlider from '@radix-ui/react-slider'
import { forwardRef, type PropsWithChildren } from 'react'

import { rootStyles } from './Slider.styles'
import { SliderContext } from './SliderContext'
import type { SliderRangeVariantsProps } from './SliderTrack.styles'

export interface SliderProps
  extends Omit<
      RadixSlider.SliderProps,
      'dir' | 'orientation' | 'inverted' | 'minStepsBetweenThumbs'
    >,
    PropsWithChildren<SliderRangeVariantsProps> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  ({ asChild = false, intent = 'basic', children, className, ...rest }, ref) => (
    <SliderContext.Provider value={{ intent }}>
      <RadixSlider.Root
        ref={ref}
        data-spark-component="slider"
        asChild={asChild}
        className={rootStyles({ className })}
        dir="ltr"
        orientation="horizontal"
        inverted={false}
        minStepsBetweenThumbs={0}
        {...rest}
      >
        {children}
      </RadixSlider.Root>
    </SliderContext.Provider>
  )
)

Slider.displayName = 'Slider'
