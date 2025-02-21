import { cx } from 'class-variance-authority'
import React, { useContext } from 'react'

import { ScrollingListContext } from './ScrollingList'

export const ScrollingListGradient = () => {
  const ctx = useContext(ScrollingListContext)

  return (
    <>
      <div
        className={cx(
          'pointer-events-none absolute top-0 left-0 h-full',
          'to-surface bg-linear-to-l from-transparent transition-all',
          ctx.overflow.left ? 'w-sz-44' : 'w-0'
        )}
      />

      <div
        className={cx(
          'pointer-events-none absolute top-0 right-0 h-full',
          'to-surface bg-linear-to-r from-transparent transition-all',
          ctx.overflow.right ? 'w-sz-44' : 'w-0'
        )}
      />
    </>
  )
}

ScrollingListGradient.displayName = 'ScrollingList.Gradient'
