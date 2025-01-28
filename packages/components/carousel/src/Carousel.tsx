import { createContext, ReactNode, useEffect } from 'react'
import { SnapCarouselResult, useSnapCarousel } from 'react-snap-carousel'

type SnapType = 'mandatory' | 'proximity' | 'none'
type ScrollBehavior = 'smooth' | 'instant'
type SnapStop = 'normal' | 'always'

interface Props {
  snapType?: SnapType
  snapStop?: SnapStop
  scrollBehavior?: ScrollBehavior
  activeSlide?: number
  itemsPerSlide?: number
  children?: ReactNode
  loop?: boolean
}

interface CarouselContextState extends SnapCarouselResult {
  snapType: SnapType
  snapStop: SnapStop
  scrollBehavior: ScrollBehavior
  visibleItemsRange: readonly [number, number]
  itemsPerSlide: number | undefined
  loop: boolean
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
  activeSlide,
  children,
}: Props) => {
  const snapCarouselAPI = useSnapCarousel()

  const { activePageIndex, pages } = snapCarouselAPI

  const visibleItems = pages[activePageIndex] as number[]

  const visibleItemsRange = visibleItems
    ? ([visibleItems[0]! + 1, visibleItems[visibleItems.length - 1]! + 1] as const)
    : ([0, 0] as const)

  useEffect(() => {
    if (activeSlide != null) {
      snapCarouselAPI.goTo(activeSlide)
    }
  }, [activeSlide])

  const ctxValue: CarouselContextState = {
    ...snapCarouselAPI,
    snapType,
    snapStop,
    scrollBehavior,
    visibleItemsRange,
    itemsPerSlide,
    loop,
  }

  return (
    <CarouselContext.Provider value={ctxValue}>
      <div className="flex w-full flex-col gap-lg">{children}</div>
    </CarouselContext.Provider>
  )
}

Carousel.displayName = 'Carousel'
