import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { ArrowVerticalLeft, ArrowVerticalRight } from '@spark-ui/icons'
import { cx } from 'class-variance-authority'
import React, { useContext } from 'react'

import { ScrollingListContext } from './ScrollingList'

interface Props {
  displayMode?: 'always' | 'hover'
}

export const ScrollingListControls = ({ displayMode = 'hover' }: Props) => {
  const ctx = useContext(ScrollingListContext)

  const handlePrevPage = () => {
    const shouldSnapFirstPage =
      ctx.activePageIndex === 0 && (ctx.scrollAreaRef.current?.scrollLeft || 0) > 0

    if (shouldSnapFirstPage) {
      ctx.goTo(0, { behavior: ctx.scrollBehavior })
    } else if (ctx.hasPrevPage) {
      ctx.prev({ behavior: ctx.scrollBehavior })
    } else {
      ctx.goTo(ctx.pages.length - 1, { behavior: ctx.scrollBehavior })
    }
  }

  const handleNextPage = () => {
    if (ctx.hasNextPage) {
      ctx.next({ behavior: ctx.scrollBehavior })
    } else {
      ctx.goTo(0, { behavior: ctx.scrollBehavior })
    }
  }

  return (
    <div
      className={cx(
        'px-md pointer-events-none absolute inset-0 flex flex-row items-center justify-between'
      )}
      aria-hidden
    >
      <IconButton
        intent="surface"
        design="filled"
        className={cx('pointer-events-auto shadow-sm disabled:invisible', {
          'group-hover/scrolling-list:opacity-none focus-visible:opacity-none opacity-0':
            displayMode === 'hover',
        })}
        onClick={handlePrevPage}
        disabled={!ctx.loop && !ctx.overflow.left}
        aria-label="Previous group of items"
        aria-controls="scrolling-list-items"
      >
        <Icon>
          <ArrowVerticalLeft />
        </Icon>
      </IconButton>

      <IconButton
        intent="surface"
        design="filled"
        className={cx('pointer-events-auto shadow-sm disabled:invisible', {
          'group-hover/scrolling-list:opacity-none focus-visible:opacity-none opacity-0':
            displayMode === 'hover',
        })}
        onClick={handleNextPage}
        disabled={!ctx.loop && !ctx.overflow.right}
        aria-label="Next group of items"
        aria-controls="scrolling-list-items"
      >
        <Icon>
          <ArrowVerticalRight />
        </Icon>
      </IconButton>
    </div>
  )
}

ScrollingListControls.displayName = 'ScrollingList.Controls'
