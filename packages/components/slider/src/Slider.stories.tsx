import { Meta, StoryFn } from '@storybook/react'

import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
}

export default meta

export const Default: StoryFn = _args => <Slider>Hello World!</Slider>
