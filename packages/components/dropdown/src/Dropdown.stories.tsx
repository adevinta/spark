import { Meta, StoryFn } from '@storybook/react'

import { Dropdown } from '.'

const meta: Meta<typeof Dropdown> = {
  title: 'Experimental/Dropdown',
  component: Dropdown,
}

export default meta

export const Default: StoryFn = _args => <Dropdown />
