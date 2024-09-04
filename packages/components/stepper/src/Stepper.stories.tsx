import { Meta, StoryFn } from '@storybook/react'

import { Stepper } from '.'

const meta: Meta<typeof Stepper> = {
  title: 'Experimental/Stepper',
  component: Stepper,
}

export default meta

export const Default: StoryFn = _args => <Stepper>Hello World!</Stepper>
