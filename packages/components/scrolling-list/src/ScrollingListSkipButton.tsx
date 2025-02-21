import { Button } from '@spark-ui/button'
import { cx } from 'class-variance-authority'
import React, { useContext } from 'react'

import { ScrollingListContext } from './ScrollingList'

interface Props {
  children: string
}

export const ScrollingListSkipButton = ({ children }: Props) => {
  const ctx = useContext(ScrollingListContext)

  return (
    <Button
      type="button"
      design="tinted"
      intent="surface"
      tabIndex={0}
      className={cx(
        'z-raised absolute top-1/2 left-0 -translate-y-1/2',
        'not-focus-visible:pointer-events-none not-focus-visible:size-0 not-focus-visible:opacity-0'
      )}
      onClick={ctx.skipKeyboardNavigation}
    >
      {children}
    </Button>
  )
}

ScrollingListSkipButton.displayName = 'ScrollingList.SkipButton'
