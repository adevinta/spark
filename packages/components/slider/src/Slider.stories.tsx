import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'

import { Slider, type SliderRootProps } from '.'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
}

export default meta

export const Default: StoryFn = _args => (
  <form>
    <Slider defaultValue={[50]}>
      <Slider.Track />
      <Slider.Thumb />
    </Slider>
  </form>
)

export const Range: StoryFn = _args => (
  <div>
    <Slider defaultValue={[25, 75]}>
      <Slider.Track />

      <Slider.Thumb />
      <Slider.Thumb />
    </Slider>
  </div>
)

const intents: SliderRootProps['intent'][] = [
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'danger',
  'info',
  'neutral',
]

export const Intent: StoryFn = _args => (
  <div className="grid grid-cols-5 gap-xl">
    {intents.map(intent => (
      <div key={intent} className="grow">
        <StoryLabel>{`${intent}${intent === 'basic' ? ' (default)' : ''}`}</StoryLabel>

        <Slider defaultValue={[75]} intent={intent}>
          <Slider.Track />
          <Slider.Thumb />
        </Slider>
      </div>
    ))}
  </div>
)

export const Disabled: StoryFn = _args => (
  <div>
    <Slider defaultValue={[50]} disabled>
      <Slider.Track />
      <Slider.Thumb />
    </Slider>
  </div>
)
