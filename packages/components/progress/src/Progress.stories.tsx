import { Meta, StoryFn } from '@storybook/react'

import { Progress } from '.'

const meta: Meta<typeof Progress> = {
  title: 'Experimental/Progress',
  component: Progress,
}

export default meta

export const Default: StoryFn = _args => <Progress />
