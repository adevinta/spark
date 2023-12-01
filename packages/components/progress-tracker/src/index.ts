import type { FC } from 'react'

import { ProgressTracker as Root, type ProgressTrackerProps } from './ProgressTracker'
import { ProgressTrackerStep as Step, type ProgressTrackerStepProps } from './ProgressTrackerStep'

export const ProgressTracker: FC<ProgressTrackerProps> & {
  Step: typeof Step
} = Object.assign(Root, {
  Step,
})

ProgressTracker.displayName = 'ProgressTracker'
Step.displayName = 'ProgressTracker.Step'

export type { ProgressTrackerProps, ProgressTrackerStepProps }
