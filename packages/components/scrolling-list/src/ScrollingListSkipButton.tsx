import { Button } from '@spark-ui/button'
import React from 'react'

interface Props {
  children: string
}

export const ScrollingListSkipButton = ({ children }: Props) => {
  return (
    <Button
      type="button"
      design="tinted"
      intent="surface"
      tabIndex={0}
      className="left-none top-none z-raised focus-visible:opacity-none absolute opacity-0"
    >
      {children}
    </Button>
  )
}

ScrollingListSkipButton.displayName = 'ScrollingList.SkipButton'
