import { Button } from '@spark-ui/button'
import { EyeFill, EyeOffFill } from '@spark-ui/icons'
import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps, useState } from 'react'

import { Switch } from '.'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="gap-lg flex flex-col">
    <Switch>Switch</Switch>
    <Switch defaultChecked>Switch (default checked)</Switch>
  </div>
)

export const Disabled: StoryFn = _args => (
  <div className="gap-lg flex flex-col">
    <Switch disabled>Disabled switch</Switch>
    <Switch disabled defaultChecked>
      Disabled switch (default checked)
    </Switch>
  </div>
)

const switchSizes: ComponentProps<typeof Switch>['size'][] = ['sm', 'md']

export const Sizes: StoryFn = _args => (
  <div className="gap-lg flex flex-col">
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
  <div className="gap-lg flex flex-col">
    {switchColors.map(color => (
      <Switch name="primary" intent={color} defaultChecked>
        {color}
      </Switch>
    ))}
  </div>
)

export const Icons: StoryFn = _args => (
  <div className="gap-lg flex flex-col">
    <Switch checkedIcon={null} uncheckedIcon={null}>
      without icons
    </Switch>
    <Switch checkedIcon={<EyeFill />} uncheckedIcon={<EyeOffFill />}>
      with custom icons
    </Switch>
  </div>
)

export const ControlledMode: StoryFn = () => {
  const [checked, setChecked] = useState(true)

  return (
    <div className="gap-lg flex flex-col">
      <div className="gap-md flex">
        <Button intent="danger" onClick={() => setChecked(false)}>
          Toggle off
        </Button>
        <Button intent="success" onClick={() => setChecked(true)}>
          Toggle on
        </Button>
      </div>

      <Switch checked={checked}>controlled switch</Switch>
    </div>
  )
}
