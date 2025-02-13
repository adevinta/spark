import { Carousel as Root } from './Carousel'
import { CarouselControls as Controls } from './CarouselControls'
import { CarouselPageIndicator as PageIndicator } from './CarouselPageIndicator'
import { CarouselPagePicker as PagePicker } from './CarouselPagePicker'
import { CarouselSlide as Slide } from './CarouselSlide'
import { CarouselSlides as Slides } from './CarouselSlides'
import { CarouselViewport as Viewport } from './CarouselViewport'

export const Carousel: typeof Root & {
  Controls: typeof Controls
  Slide: typeof Slide
  Slides: typeof Slides
  Viewport: typeof Viewport
  PagePicker: typeof PagePicker
  PageIndicator: typeof PageIndicator
} = Object.assign(Root, {
  Controls,
  Slide,
  Slides,
  Viewport,
  PagePicker,
  PageIndicator,
})

Carousel.displayName = 'Carousel'
