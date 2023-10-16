import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { progressBarStyles } from './ProgressBar.styles'
import { useProgress } from './ProgressContext'
import { ProgressIndicator } from './ProgressIndicator'

export type ProgressBarProps = ComponentPropsWithoutRef<'div'>

export const ProgressBar = forwardRef<HTMLDivElement, PropsWithChildren<ProgressBarProps>>(
  ({ className, children = <ProgressIndicator />, ...others }, ref) => {
    const { shape } = useProgress()

    return (
      <div className={progressBarStyles({ className, shape })} ref={ref} {...others}>
        {children}
      </div>
    )
  }
)

ProgressBar.displayName = 'Progress.Bar'
