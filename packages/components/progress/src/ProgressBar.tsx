import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { ProgressIndicator } from './ProgressIndicator'

export type ProgressBarProps = ComponentPropsWithoutRef<'div'>

export const ProgressBar = forwardRef<HTMLDivElement, PropsWithChildren<ProgressBarProps>>(
  ({ className, children = <ProgressIndicator />, ...others }, ref) => {
    return (
      <div
        className={cx(
          'relative h-sz-4 w-full transform-gpu overflow-hidden rounded-sm bg-on-background/dim-4',
          className
        )}
        ref={ref}
        {...others}
      >
        {children}
      </div>
    )
  }
)

ProgressBar.displayName = 'Progress.Bar'
