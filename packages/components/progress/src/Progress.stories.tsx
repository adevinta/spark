import { Meta, StoryFn } from '@storybook/react'
import { useEffect, useState } from 'react'

import { Progress } from '.'

const meta: Meta<typeof Progress> = {
  title: 'Experimental/Progress',
  component: Progress,
}

export default meta

export const Default: StoryFn = _args => {
  return (
    <Progress aria-label="Loading">
      <Progress.Bar />
    </Progress>
  )
}

export const Value: StoryFn = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const step = 10

      setValue(value => (value + step) % (100 + step))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Progress value={value}>
      <Progress.Bar />

      <div className="flex justify-between">
        <Progress.Label>Loading</Progress.Label>

        <span className="text-body-1 text-on-surface">{value}%</span>
      </div>
    </Progress>
  )
}

export const Max: StoryFn = _args => {
  return (
    <Progress value={1} max={4}>
      <Progress.Bar />

      <Progress.Label>Steps</Progress.Label>
    </Progress>
  )
}

export const ValueLabel: StoryFn = () => {
  return (
    <Progress value={1} max={4} getValueLabel={(value, max) => `Step ${value} of ${max}`}>
      <Progress.Bar />

      <Progress.Label>Steps</Progress.Label>
    </Progress>
  )
}

export const Label: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-lg">
      <Progress className="items-start" value={50} max={100}>
        <Progress.Bar />
        <Progress.Label>Loading</Progress.Label>
      </Progress>

      <Progress className="items-center" value={50} max={100}>
        <Progress.Bar />
        <Progress.Label>Loading</Progress.Label>
      </Progress>

      <Progress className="items-end" value={50} max={100}>
        <Progress.Bar />
        <Progress.Label>Loading</Progress.Label>
      </Progress>
    </div>
  )
}

export const Indeterminate: StoryFn = _args => {
  return (
    <Progress isIndeterminate>
      <Progress.Bar />
      <Progress.Label>Loading</Progress.Label>
    </Progress>
  )
}
