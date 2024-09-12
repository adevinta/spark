import { Meta, StoryFn } from '@storybook/react'

import { Stepper } from '.'

const meta: Meta<typeof Stepper> = {
  title: 'Experimental/Stepper',
  component: Stepper,
}

export default meta

export const Default: StoryFn = _args => <Stepper aria-label="Default stepper" />

export const Disabled: StoryFn = _args => (
  <Stepper aria-label="Disabled stepper" disabled onChange={() => console.log('disabled')} />
)

export const ReadOnly: StoryFn = _args => <Stepper aria-label="Readonly stepper" readOnly />
