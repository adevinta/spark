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
      className="absolute left-none top-none z-raised opacity-0 focus-visible:opacity-none"
    >
      {children}
    </Button>
  )
}

ScrollingListSkipButton.displayName = 'ScrollingList.SkipButton'
