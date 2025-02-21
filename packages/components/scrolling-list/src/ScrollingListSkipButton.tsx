import { Button } from '@spark-ui/button'
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
      className="left-none top-none z-raised focus-visible:opacity-none absolute opacity-0"
      onClick={ctx.skipKeyboardNavigation}
    >
      {children}
    </Button>
  )
}

ScrollingListSkipButton.displayName = 'ScrollingList.SkipButton'
