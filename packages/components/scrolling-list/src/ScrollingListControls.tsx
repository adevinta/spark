import React, { ReactNode } from 'react'

interface ScrollingListControls {
  children: ReactNode
}

export const ScrollingListControls = ({ children }: ScrollingListControls) => {
  return (
    <div
      className="px-md pointer-events-none absolute inset-0 flex flex-row items-center justify-between"
      data-scope="DATA_SCOPE"
      data-part="control"
      data-orientation="horizontal"
    >
      {children}
    </div>
  )
}

ScrollingListControls.displayName = 'ScrollingList.Controls'
