import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps } from 'react'

import { Switch } from '.'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}

export default meta

export const Default: StoryFn = _args => <Switch>Switch</Switch>

export const Disabled: StoryFn = _args => (
  <Switch id="disabled" disabled>
    Disabled switch
  </Switch>
)

const switchSizes: ComponentProps<typeof Switch>['size'][] = ['sm', 'md']

export const Sizes: StoryFn = _args => (
  <div className="gap-xl flex flex-col">
    {switchSizes.map(size => (
      <Switch name="small" size={size}>
        {size}
      </Switch>
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
      <Switch name="primary" intent={color} defaultChecked>
        {color}
      </Switch>
    ))}
  </div>
)
