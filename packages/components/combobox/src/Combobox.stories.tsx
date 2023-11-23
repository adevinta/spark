import { Meta, StoryFn } from '@storybook/react'

import { Combobox } from '.'

const meta: Meta<typeof Combobox> = {
  title: 'Experimental/Combobox',
  component: Combobox,
}

export default meta

export const Default: StoryFn = _args => <Combobox />
