import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Radio, RadioGroup, RadioGroupProps } from '.'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
}

export default meta

export const Default: StoryFn = _args => (
  <RadioGroup className="gap-md flex">
    <Radio value="1" />
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroup>
)

export const Uncontrolled: StoryFn = _args => (
  <RadioGroup className="gap-md flex" defaultValue="1">
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
    <RadioGroup className="gap-md flex" value={value} onValueChange={handleChange}>
      <Radio value="1" />
      <Radio value="2" />
      <Radio value="3" />
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
    <div className="gap-md flex flex-col">
      {intents.map(intent => (
        <div className="gap-md flex items-center">
          <span>{intent}</span>
          <RadioGroup key={intent} className="gap-md flex" defaultValue="1" intent={intent}>
            <Radio value="1" />
            <Radio value="2" />
            <Radio value="3" />
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

const sizes: RadioGroupProps['size'][] = ['sm', 'md']

export const Size: StoryFn = _args => {
  return (
    <div className="gap-md flex flex-col">
      {sizes.map(size => (
        <div className="gap-md flex items-center">
          <span>{size}</span>
          <RadioGroup key={size} className="gap-md flex" defaultValue="1" size={size}>
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
  <RadioGroup className="gap-md flex" disabled>
    <Radio value="1">
      <input />
    </Radio>
    <Radio value="2" />
    <Radio value="3" />
  </RadioGroup>
)
