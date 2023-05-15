import { Meta, StoryFn } from '@storybook/react'

import { Chip } from '.'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
}

export default meta

export const Default: StoryFn = _args => <Chip>Hello World!</Chip>
