import type { FC } from 'react'

import { Slider as Root, type SliderProps } from './Slider'
import { SliderThumb as Thumb, type SliderThumbProps } from './SliderThumb'
import { SliderTrack as Track, type SliderTrackProps } from './SliderTrack'

export const Slider: FC<SliderProps> & {
  Thumb: typeof Thumb
  Track: typeof Track
} = Object.assign(Root, {
  Thumb,
  Track,
})

export type { SliderProps, SliderThumbProps, SliderTrackProps }
