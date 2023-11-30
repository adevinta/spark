import { Meta, StoryFn } from '@storybook/react'

import { ProgressTracker } from '.'

const meta: Meta<typeof ProgressTracker> = {
  title: 'Experimental/ProgressTracker',
  component: ProgressTracker,
}

export default meta

export const Default: StoryFn = _args => (
  <ProgressTracker activeStep={2} mode="display">
    <ProgressTracker.Step
      incomplete={'not complete'}
      complete={'complete'}
      active={'active'}
    ></ProgressTracker.Step>
    <ProgressTracker.Separator />
    <ProgressTracker.Step
      incomplete={'not complete'}
      complete={'complete'}
      active={'active'}
    ></ProgressTracker.Step>
    <ProgressTracker.Step
      incomplete={'not complete'}
      complete={'complete'}
      active={'active'}
    ></ProgressTracker.Step>
    <ProgressTracker.Step
      incomplete={'not complete'}
      complete={'complete'}
      active={'active'}
    ></ProgressTracker.Step>
  </ProgressTracker>
)
