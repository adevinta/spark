import { Meta, StoryFn } from '@storybook/react'

import { Slider } from '.'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
}

export default meta

export const Default: StoryFn = _args => (
  <div>
    <Slider defaultValue={[50]}>
      <Slider.Track />
      <Slider.Thumb />
    </Slider>
  </div>
)
