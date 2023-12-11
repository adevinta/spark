import type { FC } from 'react'

import { ProgressTracker as Root, type ProgressTrackerProps } from './ProgressTracker'
import { ProgressTrackerStep as Step, type ProgressTrackerStepProps } from './ProgressTrackerStep'
import { ProgressTrackerStepLabel as StepLabel } from './ProgressTrackerStepLabel'

export const ProgressTracker: FC<ProgressTrackerProps> & {
  Step: typeof Step
  StepLabel: typeof StepLabel
} = Object.assign(Root, {
  Step,
  StepLabel,
})

ProgressTracker.displayName = 'ProgressTracker'
Step.displayName = 'ProgressTracker.Step'
StepLabel.displayName = 'ProgressTracker.StepLabel'

export type { ProgressTrackerProps, ProgressTrackerStepProps }
