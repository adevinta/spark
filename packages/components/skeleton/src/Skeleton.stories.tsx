import { Meta, StoryFn } from '@storybook/react'

import { Skeleton } from '.'

const meta: Meta<typeof Skeleton> = {
  title: 'Experimental/Skeleton',
  component: Skeleton,
}

export default meta

export const Default: StoryFn = _args => <Skeleton>Hello World!</Skeleton>
