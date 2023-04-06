import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Switch } from '.'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="gap-md flex items-center">
    <Switch id="switch" />
    <label htmlFor="switch">Switch</label>
  </div>
)

export const Disabled: StoryFn = _args => (
  <div className="gap-md flex items-center">
    <Switch id="disabled" disabled />
    <label htmlFor="disabled" className="text-on-background/dim-3">
      Disabled switch
    </label>
  </div>
)

const switchSizes: ComponentProps<typeof Switch>['size'][] = ['sm', 'md']

export const Sizes: StoryFn = _args => (
  <div className="gap-xl flex flex-col">
    {switchSizes.map(size => (
      <div className="gap-md flex items-center" key={size}>
        <Switch name="small" size={size} id={`switch-${size}`} />
        <label htmlFor={`switch-${size}`}>{size}</label>
      </div>
    ))}
  </div>
)

const switchColors: ComponentProps<typeof Switch>['intent'][] = [
  'primary',
  'secondary',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
]

export const Colors: StoryFn = _args => (
  <div className="gap-xl flex flex-col">
    {switchColors.map(color => (
      <div className="gap-md flex items-center" key={color}>
        <Switch name="primary" intent={color} defaultChecked id={`switch-${color}`} />
        <label htmlFor={`switch-${color}`}>{color}</label>
      </div>
    ))}
  </div>
)
