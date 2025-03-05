import { Icon } from '@spark-ui/icon'
import { IconButton, IconButtonProps } from '@spark-ui/icon-button'
import { ArrowVerticalRight } from '@spark-ui/icons'
import { cx } from 'class-variance-authority'
import { useContext } from 'react'

import { ScrollingListContext } from './ScrollingList'

export const ScrollingListNextButton = ({ 'aria-label': ariaLabel, ...rest }: IconButtonProps) => {
  const ctx = useContext(ScrollingListContext)

  const handleNextPage = () => {
    if (ctx.hasNextPage) {
      ctx.next({ behavior: ctx.scrollBehavior })
    } else {
      ctx.goTo(0, { behavior: ctx.scrollBehavior })
    }
  }

  return (
    <IconButton
      size="sm"
      intent="surface"
      design="filled"
      className={cx(
        'pointer-events-auto opacity-(--scrolling-list-controls-opacity) shadow-sm disabled:invisible',
        'group-hover/scrolling-list:opacity-none focus-visible:opacity-none'
      )}
      onClick={handleNextPage}
      disabled={!ctx.loop && !ctx.overflow.right}
      aria-label={ariaLabel}
      aria-controls="scrolling-list-items"
      {...rest}
    >
      <Icon>
        <ArrowVerticalRight />
      </Icon>
    </IconButton>
  )
}

ScrollingListNextButton.displayName = 'ScrollingList.NextButton'
