import {
  Progress as ProgressPrimitive,
  ProgressIndicator as ProgressPrimitiveIndicator,
  ProgressProps as ProgressPrimitiveProps,
} from '@radix-ui/react-progress'
import { ElementRef, forwardRef, PropsWithChildren } from 'react'

export type ProgressProps = ProgressPrimitiveProps

export const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive>,
  PropsWithChildren<ProgressProps>
>(({ value: valueProp, ...others }, ref) => {
  const value = valueProp ?? 0

  return (
    <ProgressPrimitive
      className="relative h-sz-4 w-full transform-gpu overflow-hidden rounded-sm bg-on-background/dim-4"
      value={value}
      ref={ref}
      {...others}
    >
      <ProgressPrimitiveIndicator
        className="h-full w-full bg-basic"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive>
  )
})
