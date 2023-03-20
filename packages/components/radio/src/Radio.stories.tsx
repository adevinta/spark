import { StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Radio, RadioGroup } from '.'

export const Default: StoryFn = args => (
  <RadioGroup className="flex gap-md" {...args}>
    <Radio value="1" />
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroup>
)

export const Uncontrolled: StoryFn = args => (
  <RadioGroup className="flex gap-md" defaultValue="1" {...args}>
    <Radio value="1" />
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroup>
)

export const Controlled: StoryFn = args => {
  const [value, setValue] = useState('1')

  const handleChange = (current: string) => {
    setValue(current)
  }

  return (
    <RadioGroup className="flex gap-md" value={value} onValueChange={handleChange} {...args}>
      <Radio value="1" />
      <Radio value="2" />
      <Radio value="3" />
    </RadioGroup>
  )
}

export const Intent: StoryFn = args => {
  return (
    <RadioGroup className="flex gap-md" defaultValue="1" intent="secondary" {...args}>
      <Radio value="1" />
      <Radio value="2" />
      <Radio value="3" />
    </RadioGroup>
  )
}

export const Size: StoryFn = args => {
  return (
    <RadioGroup className="flex gap-md" defaultValue="1" size="medium" {...args}>
      <Radio value="1" />
      <Radio value="2" />
      <Radio value="3" />
    </RadioGroup>
  )
}

export const Disabled: StoryFn = args => (
  <RadioGroup className="flex gap-md" disabled {...args}>
    <Radio value="1">
      <input />
    </Radio>
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroup>
)
