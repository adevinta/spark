import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type ProgressTrackerStepLabelProps = ComponentPropsWithoutRef<'span'> & {
  children: ReactNode
}

export const ProgressTrackerStepLabel = ({ children }: ProgressTrackerStepLabelProps) => (
  <span className="block text-body-2 font-bold text-on-surface">{children}</span>
)

ProgressTrackerStepLabel.displayName = 'ProgressTracker.StepLabel'
