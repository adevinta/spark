import { Meta, StoryFn } from '@storybook/react'

import { Slot } from '.'

const meta: Meta<typeof Slot> = {
  title: 'Components/Slot',
  component: Slot,
}

export default meta

export const Default: StoryFn = _args => (
  <Slot href="/">
    <a>Link</a>
  </Slot>
)
