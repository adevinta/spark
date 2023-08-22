import { ProgressIndicator as ProgressIndicatorPrimitive } from '@radix-ui/react-progress'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, PropsWithChildren } from 'react'

import { useProgress } from './ProgressContext'

export type ProgressIndicatorProps = ComponentPropsWithoutRef<'div'>

export const ProgressIndicator = forwardRef<
  ElementRef<typeof ProgressIndicatorPrimitive>,
  PropsWithChildren<ProgressIndicatorProps>
>(({ className, style, ...others }, ref) => {
  const { value } = useProgress()

  return (
    <ProgressIndicatorPrimitive
      className={cx('h-full w-full bg-basic transition-transform duration-400', className)}
      style={{ ...style, transform: `translateX(-${100 - value}%)` }}
      ref={ref}
      {...others}
    />
  )
})

ProgressIndicator.displayName = 'Progress.Indicator'
