import { StoryLabel } from '@docs/helpers/StoryLabel'
import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

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
      <Slider.Thumb aria-label="Power" />
    </Slider>
  </form>
)

export const Range: StoryFn = _args => (
  <div>
    <Slider defaultValue={[25, 75]}>
      <Slider.Track />

      <Slider.Thumb aria-label="Power min" />
      <Slider.Thumb aria-label="Power max" />
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
          <Slider.Thumb aria-label={`Power ${intent}`} />
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
          <Slider.Thumb aria-label={`Power ${shape}`} />
        </Slider>
      </div>
    ))}
  </div>
)

export const Disabled: StoryFn = _args => (
  <div>
    <Slider defaultValue={[50]} disabled>
      <Slider.Track />
      <Slider.Thumb aria-label="Power" />
    </Slider>
  </div>
)

export const RestrictedValues: StoryFn = () => {
  const values = [10, 25, 50, 100]

  const [value, setValue] = useState([0])
  const remappedValue = values[value.at(0) ?? 0]

  return (
    <div>
      <Slider onValueChange={setValue} value={value} max={values.length - 1}>
        <Slider.Track />
        <Slider.Thumb aria-valuetext={String(remappedValue)} aria-label="Power" />
      </Slider>
      <div className="mt-md flex flex-col gap-y-md">
        <p className="font-semi-bold">
          slider value: <span className="font-regular">{value}</span>
        </p>

        <p className="font-semi-bold">
          remapped value: <span className="font-regular">{remappedValue}</span>
        </p>
      </div>
    </div>
  )
}
