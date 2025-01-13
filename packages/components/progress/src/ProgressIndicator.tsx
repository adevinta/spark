import { ProgressIndicator as ProgressIndicatorPrimitive } from '@radix-ui/react-progress'
import { ComponentPropsWithRef, PropsWithChildren } from 'react'

import { useProgress } from './ProgressContext'
import { progressIndicatorStyles } from './ProgressIndicator.styles'

export type ProgressIndicatorProps = ComponentPropsWithRef<'div'>

export const ProgressIndicator = ({
  className,
  style,
  ref,
  ...others
}: PropsWithChildren<ProgressIndicatorProps>) => {
  const { value, max, intent, shape, isIndeterminate } = useProgress()
  const x = ((max - value) / max) * 100

  return (
    <ProgressIndicatorPrimitive
      className={progressIndicatorStyles({ className, intent, shape, isIndeterminate })}
      style={{ ...style, ...(!isIndeterminate && { transform: `translateX(-${x}%)` }) }}
      ref={ref}
      {...others}
    />
  )
}

ProgressIndicator.displayName = 'Progress.Indicator'
