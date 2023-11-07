import { Meta, StoryFn } from '@storybook/react'

import { Select } from '.'

const meta: Meta<typeof Select> = {
  title: 'Experimental/Select',
  component: Select,
}

export default meta

export const Default: StoryFn = _args => <Select />
