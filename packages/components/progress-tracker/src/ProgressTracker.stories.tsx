import { Meta, StoryFn } from '@storybook/react'

import { ProgressTracker } from '.'

const meta: Meta<typeof ProgressTracker> = {
  title: 'Experimental/ProgressTracker',
  component: ProgressTracker,
}

export default meta

export const Default: StoryFn = _args => <ProgressTracker>Hello World!</ProgressTracker>
