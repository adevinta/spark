import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowVerticalLeft, ArrowVerticalRight } from '@spark-ui/icons'

import { useCarouselContext } from './Carousel'

export const CarouselControls = () => {
  const ctx = useCarouselContext()

  return (
    <div
      className="px-lg pointer-events-none absolute inset-0 flex flex-row-reverse items-center justify-between"
      {...ctx.getControlProps()}
    >
      <IconButton
        {...ctx.getNextTriggerProps()}
        intent="surface"
        design="filled"
        className="pointer-events-auto cursor-pointer shadow-sm disabled:invisible"
        aria-label="Next group of items"
      >
        <Icon>
          <ArrowVerticalRight />
        </Icon>
      </IconButton>
      <IconButton
        intent="surface"
        design="filled"
        {...ctx.getPrevTriggerProps()}
        className="pointer-events-auto cursor-pointer shadow-sm disabled:invisible"
        aria-label="Previous group of items"
      >
        <Icon>
          <ArrowVerticalLeft />
        </Icon>
      </IconButton>
    </div>
  )
}

CarouselControls.displayName = 'Carousel.Controls'
