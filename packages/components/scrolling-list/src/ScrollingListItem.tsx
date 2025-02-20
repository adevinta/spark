import { cx } from 'class-variance-authority'
import { ReactNode, useContext, useRef } from 'react'

import { ScrollingListContext } from './ScrollingList'

export interface ScrollingListItemProps {
  isSnapPoint?: boolean
  children?: ReactNode
  index?: number
  className?: string
  style?: React.HTMLAttributes<HTMLLIElement>['style']
}

export const ScrollingListItem = ({
  children,
  index = 0,
  className = '',
  style = {},
}: ScrollingListItemProps) => {
  const ctx = useContext(ScrollingListContext)

  const isSnapPoint = ctx.snapPointIndexes.has(index)

  const itemRef = useRef<HTMLLIElement>(null)

  return (
    <li
      ref={itemRef}
      className={cx('relative box-border shrink-0 overflow-y-hidden default:w-auto', className)}
      style={{
        scrollSnapAlign: isSnapPoint ? 'start' : '',
        ...(isSnapPoint && { scrollSnapStop: ctx.snapStop }),
        ...style,
      }}
    >
      {children}
    </li>
  )
}

ScrollingListItem.displayName = 'ScrollingList.Item'
