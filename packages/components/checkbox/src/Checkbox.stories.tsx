import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="flex items-center gap-sm">
    <Checkbox id={'c1'} />
    <label
      htmlFor={'c1'}
      className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const Disabled: StoryFn = _args => (
  <div className="flex items-center gap-sm">
    <Checkbox id={'c2'} disabled />
    <label
      htmlFor={'c2'}
      className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const DefaultChecked: StoryFn = _args => (
  <div className="flex items-center gap-sm">
    <Checkbox id={'c3'} defaultChecked />
    <label
      htmlFor={'c3'}
      className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
    >
      Accept terms and conditions.
    </label>
  </div>
)

export const Controlled: StoryFn = _args => {
  const [value, setValue] = useState(false)

  const handleChange = (checked: boolean) => {
    setValue(!!checked)
  }

  return (
    <div className="flex items-center gap-sm">
      <Checkbox id={'c4'} checked={value} onCheckedChange={handleChange} />
      <label
        htmlFor={'c4'}
        className="cursor-pointer pl-[4px] text-body-1 font-medium peer-disabled:cursor-not-allowed  peer-disabled:opacity-dim-3"
      >
        Accept terms and conditions.
      </label>
    </div>
  )
}

const intent = ['primary', 'success', 'alert', 'error'] as const

export const Intent: StoryFn = _args => (
  <>
    {intent.map(color => {
      return (
        <div className="flex items-center gap-sm" key={color}>
          <Checkbox id={color} intent={color} />
          <label htmlFor={color}>{color}</label>
        </div>
      )
    })}
  </>
)
