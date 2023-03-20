import { StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Checkbox } from './Checkbox'

export const Default: StoryFn = args => (
  <div className="flex items-center gap-sm">
    <Checkbox id={'c1'} {...args} />
    <label
      htmlFor={'c1'}
      className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const Disabled: StoryFn = args => (
  <div className="flex items-center gap-sm">
    <Checkbox id={'c2'} disabled {...args} />
    <label
      htmlFor={'c2'}
      className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const DefaultChecked: StoryFn = args => (
  <div className="flex items-center gap-sm">
    <Checkbox id={'c3'} defaultChecked {...args} />
    <label
      htmlFor={'c3'}
      className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const Controlled: StoryFn = args => {
  const [value, setValue] = useState(false)

  const handleChange = (checked: boolean) => {
    setValue(!!checked)
  }

  return (
    <div className="flex items-center gap-sm">
      <Checkbox id={'c4'} checked={value} onCheckedChange={handleChange} {...args} />
      <label
        htmlFor={'c4'}
        className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
      >
        Accept terms and conditions.
      </label>
    </div>
  )
}

const intent = ['primary', 'secondary', 'success', 'alert', 'error', 'info', 'neutral'] as const

export const Intent: StoryFn = args => (
  <>
    {intent.map(color => {
      return (
        <div className="flex items-center gap-sm" key={color}>
          <Checkbox id={color} intent={color} {...args} />
          <label htmlFor={color}>{color}</label>
        </div>
      )
    })}
  </>
)
