import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Radio, RadioGroup, RadioGroupProps } from '.'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
}

export default meta

export const Default: StoryFn = _args => (
  <RadioGroup>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)

export const Uncontrolled: StoryFn = _args => (
  <RadioGroup defaultValue="1">
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState('1')

  const handleChange = (current: string) => {
    setValue(current)
  }

  return (
    <RadioGroup value={value} onValueChange={handleChange}>
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
    <div className="gap-xl flex">
      {intents.map(intent => (
        <div key={intent}>
          <StoryLabel>{intent}</StoryLabel>
          <RadioGroup defaultValue="1" intent={intent}>
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
    <div className="gap-xl flex">
      {sizes.map(size => (
        <div key={size}>
          <StoryLabel>{size}</StoryLabel>
          <RadioGroup defaultValue="1" size={size}>
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
  <RadioGroup disabled>
    <Radio value="1">First</Radio>
    <Radio value="2">Second</Radio>
    <Radio value="3">Third</Radio>
  </RadioGroup>
)
