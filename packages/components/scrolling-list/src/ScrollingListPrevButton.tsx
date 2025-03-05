import { Icon } from '@spark-ui/icon'
import { IconButton, IconButtonProps } from '@spark-ui/icon-button'
import { ArrowVerticalLeft } from '@spark-ui/icons'
import { cx } from 'class-variance-authority'
import { useContext } from 'react'

import { ScrollingListContext } from './ScrollingList'

interface Props extends IconButtonProps {
  displayMode?: 'hover' | 'always'
}

export const ScrollingListPrevButton = ({
  'aria-label': ariaLabel,
  displayMode = 'hover',
  ...rest
}: Props) => {
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

  return (
    <IconButton
      intent="surface"
      design="filled"
      className={cx('pointer-events-auto shadow-sm disabled:invisible', {
        'group-hover/scrolling-list:opacity-none focus-visible:opacity-none opacity-0':
          displayMode === 'hover',
      })}
      onClick={handlePrevPage}
      disabled={!ctx.loop && !ctx.overflow.left}
      aria-label={ariaLabel}
      aria-controls="scrolling-list-items"
      {...rest}
    >
      <Icon>
        <ArrowVerticalLeft />
      </Icon>
    </IconButton>
  )
}

ScrollingListPrevButton.displayName = 'ScrollingList.PrevButton'
