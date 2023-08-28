import { ProgressIndicator as ProgressIndicatorPrimitive } from '@radix-ui/react-progress'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, PropsWithChildren } from 'react'

import { useProgress } from './ProgressContext'
import { progressIndicatorStyles } from './ProgressIndicator.styles'

export type ProgressIndicatorProps = ComponentPropsWithoutRef<'div'>

export const ProgressIndicator = forwardRef<
  ElementRef<typeof ProgressIndicatorPrimitive>,
  PropsWithChildren<ProgressIndicatorProps>
>(({ className, style, ...others }, ref) => {
  const { value, max, isIndeterminate } = useProgress()
  const x = ((max - value) / max) * 100

  return (
    <ProgressIndicatorPrimitive
      className={progressIndicatorStyles({ isIndeterminate, className })}
      style={{ ...style, ...(!isIndeterminate && { transform: `translateX(-${x}%)` }) }}
      ref={ref}
      {...others}
    />
  )
})

ProgressIndicator.displayName = 'Progress.Indicator'
