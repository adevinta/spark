import { Carousel as Root } from './Carousel'
import { CarouselControls as Controls } from './CarouselControls'
import { CarouselItem as Item } from './CarouselItem'
import { CarouselItems as Items } from './CarouselItems'
import { CarouselPageIndicator as PageIndicator } from './CarouselPageIndicator'
import { CarouselPagePicker as PagePicker } from './CarouselPagePicker'
import { CarouselViewport as Viewport } from './CarouselViewport'

export const Carousel: typeof Root & {
  Controls: typeof Controls
  Item: typeof Item
  Items: typeof Items
  Viewport: typeof Viewport
  PagePicker: typeof PagePicker
  PageIndicator: typeof PageIndicator
} = Object.assign(Root, {
  Controls,
  Item,
  Items,
  Viewport,
  PagePicker,
  PageIndicator,
})

Carousel.displayName = 'Carousel'
