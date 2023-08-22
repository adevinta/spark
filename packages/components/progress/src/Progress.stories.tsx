import { Meta, StoryFn } from '@storybook/react'

import { Progress } from '.'

const meta: Meta<typeof Progress> = {
  title: 'Experimental/Progress',
  component: Progress,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <Progress className="items-start" value={50} max={100}>
      <Progress.Bar />
    </Progress>
  )
}

export const Label: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-lg">
      <Progress className="items-start" value={50} max={100}>
        <Progress.Bar />
        <Progress.Label>Label</Progress.Label>
      </Progress>

      <Progress className="items-center" value={50} max={100}>
        <Progress.Bar />
        <Progress.Label>Label</Progress.Label>
      </Progress>

      <Progress className="items-end" value={50} max={100}>
        <Progress.Bar />
        <Progress.Label>Label</Progress.Label>
      </Progress>
    </div>
  )
}
