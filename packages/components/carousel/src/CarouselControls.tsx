import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowVerticalLeft, ArrowVerticalRight } from '@spark-ui/icons'
import React, { useContext } from 'react'

import { CarouselContext } from './Carousel'

export const CarouselControls = () => {
  const ctx = useContext(CarouselContext)

  const handlePrevPage = () => {
    ctx.hasPrevPage
      ? ctx.prev({ behavior: ctx.scrollBehavior })
      : ctx.goTo(ctx.pages.length - 1, { behavior: ctx.scrollBehavior })
  }

  const handleNextPage = () => {
    ctx.hasNextPage
      ? ctx.next({ behavior: ctx.scrollBehavior })
      : ctx.goTo(0, { behavior: ctx.scrollBehavior })
  }

  return (
    <div
      className="pointer-events-none absolute inset-none flex flex-row-reverse items-center justify-between"
      aria-hidden
    >
      <IconButton
        intent="support"
        design="outlined"
        className="pointer-events-auto !bg-surface disabled:invisible"
        onClick={handleNextPage}
        disabled={!ctx.loop && !ctx.hasNextPage}
        aria-label="Next group of items"
        aria-controls="carousel-items"
      >
        <Icon>
          <ArrowVerticalRight />
        </Icon>
      </IconButton>

      <IconButton
        intent="support"
        design="outlined"
        className="pointer-events-auto !bg-surface disabled:invisible"
        onClick={handlePrevPage}
        disabled={!ctx.loop && !ctx.hasPrevPage}
        aria-label="Previous group of items"
        aria-controls="carousel-items"
      >
        <Icon>
          <ArrowVerticalLeft />
        </Icon>
      </IconButton>
    </div>
  )
}

CarouselControls.displayName = 'Carousel.Controls'
