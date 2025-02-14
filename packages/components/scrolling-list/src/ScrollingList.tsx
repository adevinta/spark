import { createContext, ReactNode } from 'react'
import { SnapCarouselResult, useSnapCarousel } from 'react-snap-carousel'

type SnapType = 'mandatory' | 'proximity' | 'none'
type ScrollBehavior = 'smooth' | 'instant'
type SnapStop = 'normal' | 'always'

interface Props {
  snapType?: SnapType
  snapStop?: SnapStop
  scrollBehavior?: ScrollBehavior
  itemsPerSlide?: number
  children?: ReactNode
  loop?: boolean
}

interface ScrollingListContextState extends SnapCarouselResult {
  snapType: SnapType
  snapStop: SnapStop
  scrollBehavior: ScrollBehavior
  visibleItemsRange: readonly [number, number]
  itemsPerSlide: number | undefined
  loop: boolean
}

export const ScrollingListContext = createContext<ScrollingListContextState>(
  null as unknown as ScrollingListContextState
)

export const ScrollingList = ({
  snapType = 'mandatory',
  snapStop = 'normal',
  scrollBehavior = 'smooth',
  itemsPerSlide,
  loop = false,
  children,
}: Props) => {
  const snapCarouselAPI = useSnapCarousel()

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
    itemsPerSlide,
    loop,
  }

  return (
    <ScrollingListContext.Provider value={ctxValue}>
      <div className="relative flex w-full flex-col gap-lg">{children}</div>
    </ScrollingListContext.Provider>
  )
}

ScrollingList.displayName = 'ScrollingList'
