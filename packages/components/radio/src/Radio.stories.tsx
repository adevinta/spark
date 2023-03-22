import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Radio, RadioGroup } from '.'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
}

export default meta

export const Default: StoryFn = _args => (
  <RadioGroup className="flex gap-md">
    <Radio value="1" />
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroup>
)

export const Uncontrolled: StoryFn = _args => (
  <RadioGroup className="flex gap-md" defaultValue="1">
    <Radio value="1" />
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroup>
)

export const Controlled: StoryFn = _args => {
  const [value, setValue] = useState('1')

  const handleChange = (current: string) => {
    setValue(current)
  }

  return (
    <RadioGroup className="flex gap-md" value={value} onValueChange={handleChange}>
      <Radio value="1" />
      <Radio value="2" />
      <Radio value="3" />
    </RadioGroup>
  )
}

const intents = ['primary', 'secondary', 'success', 'alert', 'error', 'info', 'neutral'] as const
export const Intent: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-md">
      {intents.map(intent => (
        <div className="flex items-center gap-md">
          <span>{intent}</span>
          <RadioGroup key={intent} className="flex gap-md" defaultValue="1" intent={intent}>
            <Radio value="1" />
            <Radio value="2" />
            <Radio value="3" />
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

const sizes = ['small', 'medium'] as const
export const Size: StoryFn = _args => {
  return (
    <div className="flex flex-col gap-md">
      {sizes.map(size => (
        <div className="flex items-center gap-md">
          <span>{size}</span>
          <RadioGroup key={size} className="flex gap-md" defaultValue="1" size={size}>
            <Radio value="1" />
            <Radio value="2" />
            <Radio value="3" />
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

export const Disabled: StoryFn = _args => (
  <RadioGroup className="flex gap-md" disabled>
    <Radio value="1">
      <input />
    </Radio>
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroup>
)
