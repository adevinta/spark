import * as RadixSlider from '@radix-ui/react-slider'
import { forwardRef, type PropsWithChildren } from 'react'

import { SliderContext } from './SliderContext'
import { rootStyles } from './SliderRoot.styles'
import type { SliderRangeVariantsProps } from './SliderTrack.styles'

export interface SliderRootProps
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

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
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

SliderRoot.displayName = 'Slider'
