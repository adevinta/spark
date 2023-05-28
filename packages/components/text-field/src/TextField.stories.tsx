import { Meta, StoryFn } from '@storybook/react'

import { TextField } from '.'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
}

export default meta

export const Default: StoryFn = _args => (
  <TextField>Hello World!</TextField>
)
