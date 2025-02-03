import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowVerticalLeft, ArrowVerticalRight } from '@spark-ui/icons'
import React, { useContext } from 'react'

import { ScrollingListContext } from './ScrollingList'

export const ScrollingListControls = () => {
  const ctx = useContext(ScrollingListContext)

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
      className="px-md pointer-events-none absolute inset-0 flex flex-row-reverse items-center justify-between"
      aria-hidden
    >
      <IconButton
        intent="surface"
        design="filled"
        className="pointer-events-auto drop-shadow disabled:invisible"
        onClick={handleNextPage}
        disabled={!ctx.loop && !ctx.hasNextPage}
        aria-label="Next group of items"
        aria-controls="scrolling-list-items"
      >
        <Icon>
          <ArrowVerticalRight />
        </Icon>
      </IconButton>

      <IconButton
        intent="surface"
        design="filled"
        className="pointer-events-auto drop-shadow disabled:invisible"
        onClick={handlePrevPage}
        disabled={!ctx.loop && !ctx.hasPrevPage}
        aria-label="Previous group of items"
        aria-controls="scrolling-list-items"
      >
        <Icon>
          <ArrowVerticalLeft />
        </Icon>
      </IconButton>
    </div>
  )
}

ScrollingListControls.displayName = 'ScrollingList.Controls'
