import { Meta, StoryFn } from '@storybook/react'

import { Rating } from '.'

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
}

export default meta

export const Default: StoryFn = _args => <Rating>Hello World!</Rating>
