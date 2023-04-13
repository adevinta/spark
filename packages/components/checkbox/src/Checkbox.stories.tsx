import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn = _args => <Checkbox id={'c1'}>Accept terms and conditions.</Checkbox>

export const Disabled: StoryFn = _args => <Checkbox disabled>Accept terms and conditions.</Checkbox>

export const DefaultChecked: StoryFn = _args => (
  <Checkbox defaultChecked>Accept terms and conditions.</Checkbox>
)

export const Controlled: StoryFn = _args => {
  const [value, setValue] = useState(false)

  const handleChange = (checked: boolean) => {
    setValue(!!checked)
  }

  return (
    <Checkbox checked={value} onCheckedChange={handleChange}>
      Accept terms and conditions.
    </Checkbox>
  )
}

const intent = ['primary', 'success', 'alert', 'error'] as const

export const Intent: StoryFn = _args => (
  <>
    {intent.map(color => {
      return <Checkbox intent={color}>{color}</Checkbox>
    })}
  </>
)
export const Icon: StoryFn = _args => (
  <Checkbox
    defaultChecked
    icon={
      <svg viewBox="0 0 200 200" fill="currentColor">
        <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
      </svg>
    }
  >
    Accept terms and conditions.
  </Checkbox>
)
