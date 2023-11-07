import { Meta, StoryFn } from '@storybook/react'

import { Rating } from '.'

const meta: Meta<typeof Rating> = {
  title: 'Experimental/Rating',
  component: Rating,
}

export default meta

export const Default: StoryFn = _args => <Rating aria-label="rating" />
