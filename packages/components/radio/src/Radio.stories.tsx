import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Radio, RadioGroup, RadioGroupProps } from '.'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
}

export default meta

export const Default: StoryFn = _args => (
  <RadioGroup className="flex gap-lg">
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)

export const Uncontrolled: StoryFn = _args => (
  <RadioGroup className="flex gap-lg" defaultValue="1">
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)

export const Controlled: StoryFn = _args => {
  const [value, setValue] = useState('1')

  const handleChange = (current: string) => {
    setValue(current)
  }

  return (
    <RadioGroup className="flex gap-lg" value={value} onValueChange={handleChange}>
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </RadioGroup>
  )
}

const intents: RadioGroupProps['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
]

export const Intent: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-lg">
      {intents.map(intent => (
        <div className="flex flex-col justify-center gap-lg">
          <p>{intent}</p>
          <RadioGroup key={intent} className="flex gap-lg" defaultValue="1" intent={intent}>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

const sizes: RadioGroupProps['size'][] = ['sm', 'md']

export const Size: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-lg">
      {sizes.map(size => (
        <div className="flex flex-col justify-center gap-lg">
          <p>{size}</p>
          <RadioGroup key={size} className="flex gap-lg" defaultValue="1" size={size}>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

export const Disabled: StoryFn = _args => (
  <RadioGroup className="flex gap-lg" disabled>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)
