import { createContext, ReactNode, RefObject, useRef } from 'react'
import { SnapCarouselResult, useSnapCarousel } from 'react-snap-carousel'

import { ScrollOverflow, useScrollOverflow } from './useScrollOverflow'
// import { useSnapPoints } from './useSnapPoints'

type SnapType = 'mandatory' | 'proximity' | 'none'
type ScrollBehavior = 'smooth' | 'instant'
type SnapStop = 'normal' | 'always'

interface Props {
  snapType?: SnapType
  snapStop?: SnapStop
  scrollBehavior?: ScrollBehavior
  children?: ReactNode
  loop?: boolean
  gap?: number
  scrollPadding?: number
}

interface ScrollingListContextState extends SnapCarouselResult {
  snapType: SnapType
  snapStop: SnapStop
  scrollBehavior: ScrollBehavior
  visibleItemsRange: readonly [number, number]
  loop: boolean
  gap: number
  scrollPadding: number
  scrollAreaRef: RefObject<HTMLUListElement | null>
  overflow: ScrollOverflow
}

export const ScrollingListContext = createContext<ScrollingListContextState>(
  null as unknown as ScrollingListContextState
)

export const ScrollingList = ({
  snapType = 'none',
  snapStop = 'normal',
  scrollBehavior = 'smooth',
  loop = false,
  gap = 16,
  scrollPadding = 0,
  children,
}: Props) => {
  const scrollAreaRef = useRef<HTMLUListElement>(null)
  const snapCarouselAPI = useSnapCarousel()

  // const sp = useSnapPoints(scrollAreaRef)
  const overflow = useScrollOverflow(scrollAreaRef)

  const { activePageIndex, pages } = snapCarouselAPI

  const visibleItems = pages[activePageIndex] as number[]

  const visibleItemsRange = visibleItems
    ? ([visibleItems[0]! + 1, visibleItems[visibleItems.length - 1]! + 1] as const)
    : ([0, 0] as const)

  const ctxValue: ScrollingListContextState = {
    ...snapCarouselAPI,
    snapType,
    snapStop,
    scrollBehavior,
    visibleItemsRange,
    loop,
    gap,
    scrollPadding,
    scrollAreaRef,
    overflow,
  }

  return (
    <ScrollingListContext.Provider value={ctxValue}>
      <div className="gap-lg group/scrolling-list relative flex w-full flex-col">{children}</div>
    </ScrollingListContext.Provider>
  )
}

ScrollingList.displayName = 'ScrollingList'
