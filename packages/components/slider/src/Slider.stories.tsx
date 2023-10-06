import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'

import { Slider, type SliderProps } from '.'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
}

export default meta

export const Default: StoryFn = _args => (
  <form>
    <Slider defaultValue={[50]} name="default-slider">
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

const intents: SliderProps['intent'][] = [
  'main',
  'support',
  'accent',
  'basic',
  'success',
  'alert',
  'error',
  'info',
  'neutral',
]

const shapes: SliderProps['shape'][] = ['square', 'rounded']

export const Intent: StoryFn = _args => (
  <div className="grid grid-cols-2 gap-xl sm:grid-cols-5">
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

export const Shape: StoryFn = _args => (
  <div className="grid grid-cols-2 gap-xl">
    {shapes.map(shape => (
      <div key={shape} className="grow">
        <StoryLabel>{`${shape}${shape === 'square' ? ' (default)' : ''}`}</StoryLabel>

        <Slider defaultValue={[75]} shape={shape}>
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

export const ThumbOverlapp: StoryFn = _args => (
  <div>
    <Slider defaultValue={[25, 75]} step={5} minStepsBetweenThumbs={1}>
      <Slider.Track />
      <Slider.Thumb />
      <Slider.Thumb />
    </Slider>
  </div>
)
