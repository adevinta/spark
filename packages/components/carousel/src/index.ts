import { Carousel as Root } from './Carousel'
import { CarouselControls as Controls } from './CarouselControls'
import { CarouselItem as Item } from './CarouselItem'
import { CarouselItems as Items } from './CarouselItems'
import { CarouselSlidePicker as SlidePicker } from './CarouselSlidePicker'
import { CarouselViewport as Viewport } from './CarouselViewport'

export const Carousel: typeof Root & {
  Controls: typeof Controls
  Item: typeof Item
  Items: typeof Items
  Viewport: typeof Viewport
  SlidePicker: typeof SlidePicker
} = Object.assign(Root, {
  Controls,
  Item,
  Items,
  Viewport,
  SlidePicker,
})

Carousel.displayName = 'Carousel'
