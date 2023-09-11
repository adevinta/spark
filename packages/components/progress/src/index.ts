import { FC } from 'react'

import { Progress as Root, ProgressProps } from './Progress'
import { ProgressBar } from './ProgressBar'
import { ProgressIndicator } from './ProgressIndicator'
import { ProgressLabel } from './ProgressLabel'

export const Progress: FC<ProgressProps> & {
  Label: typeof ProgressLabel
  Bar: typeof ProgressBar
  Indicator: typeof ProgressIndicator
} = Object.assign(Root, {
  Label: ProgressLabel,
  Bar: ProgressBar,
  Indicator: ProgressIndicator,
})

export { type ProgressBarProps } from './ProgressBar'
export { type ProgressLabelProps } from './ProgressLabel'
export { type ProgressIndicatorProps } from './ProgressIndicator'
