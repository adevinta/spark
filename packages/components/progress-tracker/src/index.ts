import type { FC } from 'react'

import { ProgressTracker as Root, type ProgressTrackerProps } from './ProgressTracker'
import { ProgressTrackerSeparator as Separator } from './ProgressTrackerSeparator'
import { ProgressTrackerStep as Step } from './ProgressTrackerStep'

export const ProgressTracker: FC<ProgressTrackerProps> & {
  Step: typeof Step
  Separator: typeof Separator
} = Object.assign(Root, {
  Step,
  Separator,
})

Step.displayName = 'ProgressTracker.Step'
Separator.displayName = 'ProgressTracker.Separator'
