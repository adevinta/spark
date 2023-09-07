import * as RadixSlider from '@radix-ui/react-slider'
import { forwardRef, type PropsWithChildren } from 'react'

import { rootStyles } from './SliderRoot.styles'

export interface SliderRootProps
  extends Omit<
      RadixSlider.SliderProps,
      'dir' | 'orientation' | 'inverted' | 'minStepsBetweenThumbs'
    >,
    PropsWithChildren<unknown> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
}

export const SliderRoot = forwardRef<HTMLDivElement, SliderRootProps>(
  ({ asChild = false, children, className, ...rest }, ref) => (
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
  )
)

SliderRoot.displayName = 'Slider'
