import type { FC } from 'react'

import { SliderRoot as Root, type SliderRootProps } from './SliderRoot'
import { SliderThumb as Thumb } from './SliderThumb'
import { SliderTrack as Track } from './SliderTrack'

Thumb.displayName = 'Slider.Thumb'
Track.displayName = 'Slider.Track'

export const Slider: FC<SliderRootProps> & {
  Thumb: typeof Thumb
  Track: typeof Track
} = Object.assign(Root, {
  Thumb,
  Track,
})
