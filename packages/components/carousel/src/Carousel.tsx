import { createContext, ReactNode, RefObject, useRef } from 'react'
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
  ref?: RefObject<HTMLUListElement | null>
}

interface CarouselContextState extends SnapCarouselResult {
  snapType: SnapType
  snapStop: SnapStop
  scrollBehavior: ScrollBehavior
  visibleItemsRange: readonly [number, number]
  itemsPerSlide: number | undefined
  loop: boolean
  internalRef: RefObject<HTMLUListElement | null>
}

export const CarouselContext = createContext<CarouselContextState>(
  null as unknown as CarouselContextState
)

export const Carousel = ({
  snapType = 'mandatory',
  snapStop = 'always',
  scrollBehavior = 'smooth',
  itemsPerSlide = 1,
  loop = false,
  children,
  // ref: forwardedRef
}: Props) => {
  const snapCarouselAPI = useSnapCarousel()
  const internalRef = useRef<HTMLUListElement>(null)

  const { activePageIndex, pages } = snapCarouselAPI

  const visibleItems = pages[activePageIndex] as number[]

  const visibleItemsRange = visibleItems
    ? ([visibleItems[0]! + 1, visibleItems[visibleItems.length - 1]! + 1] as const)
    : ([0, 0] as const)

  const ctxValue: CarouselContextState = {
    ...snapCarouselAPI,
    // REF: (el: HTMLElement | null ) => snapCarouselAPI.scrollRef,
    snapType,
    snapStop,
    scrollBehavior,
    visibleItemsRange,
    itemsPerSlide,
    loop,
    internalRef,
  }

  return (
    <CarouselContext.Provider value={ctxValue}>
      <div className="flex w-full flex-col gap-lg">{children}</div>
    </CarouselContext.Provider>
  )
}

Carousel.displayName = 'Carousel'
