import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Button } from '@spark-ui/button'
import { EyeFill } from '@spark-ui/icons/dist/icons/EyeFill'
import { EyeOffFill } from '@spark-ui/icons/dist/icons/EyeOffFill'
import { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps, useState } from 'react'

import { Switch } from '.'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="gap-lg flex">
    <div>
      <StoryLabel>basic</StoryLabel>
      <Switch>Agreed</Switch>
    </div>

    <div>
      <StoryLabel>defaultChecked</StoryLabel>
      <Switch defaultChecked>Agreed</Switch>
    </div>
  </div>
)

export const Disabled: StoryFn = _args => (
  <div className="gap-lg flex">
    <div>
      <StoryLabel>disabled</StoryLabel>
      <Switch disabled>Agreed</Switch>
    </div>

    <div>
      <StoryLabel>disabled + defaultChecked</StoryLabel>
      <Switch defaultChecked disabled>
        Agreed
      </Switch>
    </div>
  </div>
)

const switchSizes: ComponentProps<typeof Switch>['size'][] = ['sm', 'md']

export const Sizes: StoryFn = _args => (
  <div className="gap-lg flex">
    {switchSizes.map(size => (
      <div key={size}>
        <StoryLabel>{size}</StoryLabel>
        <Switch name="small" size={size}>
          Agreed
        </Switch>
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
  <div className="gap-lg flex">
    {switchColors.map(color => (
      <div key={color}>
        <StoryLabel>{color}</StoryLabel>
        <Switch name="primary" intent={color} defaultChecked />
      </div>
    ))}
  </div>
)

export const Icons: StoryFn = _args => (
  <div className="gap-lg flex">
    <div>
      <StoryLabel>without icons</StoryLabel>
      <Switch checkedIcon={null} uncheckedIcon={null} />
    </div>

    <div>
      <StoryLabel>with custom icons</StoryLabel>
      <Switch checkedIcon={<EyeFill />} uncheckedIcon={<EyeOffFill />} />
    </div>
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
