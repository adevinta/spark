import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Button } from '@spark-ui/button'
import { FormField } from '@spark-ui/form-field'
import { EyeFill } from '@spark-ui/icons/dist/icons/EyeFill'
import { EyeOffFill } from '@spark-ui/icons/dist/icons/EyeOffFill'
import type { Meta, StoryFn } from '@storybook/react'
import { type ComponentProps, useState } from 'react'

import { Switch } from '.'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}

export default meta

export const Default: StoryFn = _args => (
  <div className="flex gap-lg">
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

export const ImprovedField: StoryFn = _args => (
  <FormField name="agreement" isRequired>
    <FormField.Label asChild>
      <p>Agreement</p>
    </FormField.Label>

    <Switch>I agree</Switch>

    <FormField.HelperMessage>Your agreement is important to us.</FormField.HelperMessage>
  </FormField>
)

export const Disabled: StoryFn = _args => (
  <div className="flex gap-lg">
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
  <div className="flex gap-lg">
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
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
]

export const Colors: StoryFn = _args => (
  <div className="flex gap-lg">
    {switchColors.map(color => (
      <div key={color}>
        <StoryLabel>{color}</StoryLabel>
        <Switch intent={color} defaultChecked aria-label={`My ${color} switch`} />
      </div>
    ))}
  </div>
)

export const Icons: StoryFn = _args => (
  <div className="flex gap-lg">
    <div>
      <StoryLabel>without icons</StoryLabel>
      <Switch checkedIcon={null} uncheckedIcon={null} aria-label="My switch without icon" />
    </div>

    <div>
      <StoryLabel>with custom icons</StoryLabel>
      <Switch
        checkedIcon={<EyeFill />}
        uncheckedIcon={<EyeOffFill />}
        aria-label="My switch with custom icon"
      />
    </div>
  </div>
)

export const ControlledMode: StoryFn = () => {
  const [checked, setChecked] = useState(true)

  return (
    <div className="flex flex-col gap-lg">
      <div className="flex gap-md">
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
