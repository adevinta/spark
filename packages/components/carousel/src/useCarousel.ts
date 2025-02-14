/* eslint-disable max-lines-per-function */
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'

import {
  CarouselAPI,
  ComputedControlProps,
  ComputedIndicatorGroupProps,
  ComputedIndicatorProps,
  ComputedRootProps,
  ComputedSlideGroupProps,
  ComputedSlideProps,
  ComputedTriggerProps,
  UseCarouselProps,
} from './types'
import { useIsMounted } from './useIsMounted'
import { useResizeObserver } from './useResizeObserver'
import { useScrollEnd } from './useScrollEnd'

const DATA_SCOPE = 'carousel' as const
const DIRECTION = 'ltr' as const

export const useCarousel = ({
  defaultPage,
  gap = 16,
  snapType = 'mandatory',
  snapStop = 'always',
  scrollPadding = 0,
  slidesPerPage = 1,
  slidesPerMove = 'auto',
  scrollBehavior = 'smooth',
  loop = false,
  // state control
  page: controlledPage,
  onPageChange,
}: UseCarouselProps): CarouselAPI => {
  // refs
  const carouselRef = useRef<HTMLDivElement>(null)
  const pageIndicatorsRefs = useRef<(HTMLElement | null)[]>([])
  const isMounted = useIsMounted()

  // state
  const carouselId = useId()
  const [pageState, setPageState] = useState(defaultPage || controlledPage || 0)
  const [pageSnapPoints, setPageSnapPoints] = useState<number[]>([])

  useEffect(() => {
    if (controlledPage != null) scrollTo(controlledPage, scrollBehavior)
  }, [controlledPage])

  useLayoutEffect(() => {
    if (onPageChange && isMounted.current) onPageChange(pageState)
  }, [pageState])

  // computed
  const canScrollPrev = useRef(loop || pageState > 0)
  const canScrollNext = useRef(loop || pageState < pageSnapPoints.length - 1)

  canScrollPrev.current = loop || pageState > 0
  canScrollNext.current = loop || pageState < pageSnapPoints.length - 1

  /**
   * On resize, dimensions of the carousel might changes, which requires to update the snap points positions in the state.
   */
  useResizeObserver(carouselRef, () => {
    const newSnapPoints = getSnapPositions()

    if (JSON.stringify(pageSnapPoints) !== JSON.stringify(newSnapPoints)) {
      setPageSnapPoints(newSnapPoints)
    }
  })

  /**
   * Monitoring scrollend events inside the scrollable area to sync the carousel dots (active page) with current scroll position.
   * Scrollend has been chosen over "scroll" for performance reason.
   */
  useScrollEnd(carouselRef, () => {
    if (!carouselRef.current || pageSnapPoints.length === 0) return

    const { scrollLeft, clientWidth } = carouselRef.current

    const pageInViewport = getSnapPositions().findIndex(
      slideScrollLeft =>
        slideScrollLeft >= scrollLeft - gap && slideScrollLeft <= scrollLeft + clientWidth + gap
    )

    if (pageInViewport !== -1) {
      setPageState(pageInViewport)
    }
  }, [gap, JSON.stringify(pageSnapPoints)])

  function getSlideElements(): Element[] {
    return carouselRef.current
      ? Array.from(carouselRef.current.querySelectorAll('[data-part="item"]'))
      : []
  }

  function getSlidesLength(): number {
    return getSlideElements().length
  }

  function isSnapPoint(slideIndex: number) {
    return getSnapIndices({ totalSlides: getSlidesLength() }).includes(slideIndex)
  }

  /**
   * Get the scroll value of each slides that serves as the start of a page
   * @returns number[] (ex for a 400px carousel with no gap: [400, 800, 1200])
   */
  function getSnapPositions() {
    if (!carouselRef.current) return []

    return getSlideElements()
      .filter((_, index) => isSnapPoint(index))
      .map(slide => (slide as HTMLElement).offsetLeft)
  }

  /**
   * Get the indices of each slides that serves as the start of a page
   * @returns number[] (ex: [0, 2, 4])
   */
  function getSnapIndices({ totalSlides }: { totalSlides: number }) {
    const slideBy = slidesPerMove === 'auto' ? slidesPerPage : slidesPerMove
    const snapPoints: number[] = []

    const lastSnapIndex = Math.floor((totalSlides - slidesPerPage) / slideBy) * slideBy

    for (let i = 0; i <= lastSnapIndex; i += slideBy) {
      snapPoints.push(i)
    }

    // Adding final snap point if necessary
    if (snapPoints[snapPoints.length - 1] !== totalSlides - slidesPerPage) {
      snapPoints.push(totalSlides - slidesPerPage)
    }

    return snapPoints
  }

  const scrollTo = (page: number, behavior: 'instant' | 'smooth') => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: pageSnapPoints[page],
        behavior: behavior === 'instant' ? 'auto' : 'smooth',
      })
      setPageState(page)
    }
  }

  const scrollPrev = (cb?: (pageIndex: number) => void) => {
    if (canScrollPrev) {
      const targetPage =
        loop && pageState === 0 ? pageSnapPoints.length - 1 : Math.max(pageState - 1, 0)

      scrollTo(targetPage, scrollBehavior)
      cb?.(targetPage)
    }
  }

  const scrollNext = (cb?: (pageIndex: number) => void) => {
    if (canScrollNext) {
      const targetPage =
        loop && pageState === pageSnapPoints.length - 1
          ? 0
          : Math.min(pageState + 1, pageSnapPoints.length - 1)

      scrollTo(targetPage, scrollBehavior)
      cb?.(targetPage)
    }
  }

  const contextValue: CarouselAPI = {
    ref: carouselRef,
    pageIndicatorsRefs,
    // props
    gap,
    snapType,
    snapStop,
    scrollPadding,
    slidesPerPage,
    slidesPerMove,
    scrollBehavior,
    loop,
    // computed state
    page: pageState,
    pageSnapPoints,
    canScrollNext: canScrollNext.current,
    canScrollPrev: canScrollPrev.current,
    scrollTo,
    scrollPrev,
    scrollNext,
    // anatomy
    getRootProps: (): ComputedRootProps => ({
      id: `carousel::${carouselId}:`,
      role: 'region',
      'aria-roledescription': 'carousel',
      'data-scope': DATA_SCOPE,
      'data-part': 'root',
      'data-orientation': 'horizontal',
      dir: DIRECTION,
      style: {
        '--slides-per-page': slidesPerPage,
        '--slide-spacing': `${gap}px`,
        '--slide-item-size':
          'calc(100% / var(--slides-per-page) - var(--slide-spacing) * (var(--slides-per-page) - 1) / var(--slides-per-page))',
      },
    }),

    getControlProps: (): ComputedControlProps => ({
      'data-scope': DATA_SCOPE,
      'data-part': 'control',
      'data-orientation': 'horizontal',
    }),

    getPrevTriggerProps: (): ComputedTriggerProps<'prev-trigger'> => ({
      id: `carousel::${carouselId}::prev-trigger`,
      'aria-controls': `carousel::${carouselId}::item-group`,
      'data-scope': DATA_SCOPE,
      'data-part': 'prev-trigger',
      'data-orientation': 'horizontal',
      type: 'button',
      dir: DIRECTION,
      disabled: !canScrollPrev.current,
      onClick: () => scrollPrev(),
    }),

    getNextTriggerProps: (): ComputedTriggerProps<'next-trigger'> => ({
      id: `carousel::${carouselId}::next-trigger`,
      'aria-controls': `carousel::${carouselId}::item-group`,
      'data-scope': DATA_SCOPE,
      'data-part': 'next-trigger',
      'data-orientation': 'horizontal',
      type: 'button',
      dir: DIRECTION,
      disabled: !canScrollNext.current,
      onClick: () => scrollNext(),
    }),

    getSlidesContainerProps: (): ComputedSlideGroupProps => ({
      id: `carousel::${carouselId}::item-group`,
      'aria-live': 'polite',
      'data-scope': DATA_SCOPE,
      'data-part': 'item-group',
      'data-orientation': 'horizontal',
      dir: DIRECTION,
      tabIndex: 0,
      style: {
        display: 'grid',
        gap: 'var(--slide-spacing)',
        scrollSnapType: `x ${snapType}`,
        gridAutoFlow: 'column',
        scrollbarWidth: 'none',
        overscrollBehavior: 'contain',
        gridAutoColumns: 'var(--slide-item-size)',
        overflowX: 'auto',
      },
      ref: carouselRef,
    }),

    getSlideProps: ({ index, totalSlides }): ComputedSlideProps => {
      const snaps = getSnapIndices({ totalSlides })

      /**
       * The trick here is that if there is a `defaultPage`, to set scroll-snap-align only on the item matching the start of the `defaultPage`.
       * It will position the carousel on the page without relying on Javascript, which is necessary to support SSR.
       * This is to avoid a flickering effect on mount.
       */
      const shouldSetDefaultPage = !isMounted.current && defaultPage != null
      const isStopPoint = shouldSetDefaultPage ? snaps[defaultPage] === index : isSnapPoint(index)

      return {
        id: `carousel::${carouselId}::item:${index}`,
        role: 'group',
        'aria-roledescription': 'slide',
        'data-scope': DATA_SCOPE,
        'data-part': 'item',
        'data-index': index,
        'data-orientation': 'horizontal',
        dir: DIRECTION,
        style: {
          ...(isStopPoint && {
            scrollSnapAlign: 'start',
            scrollSnapStop: snapStop,
          }),
        },
      }
    },

    getIndicatorGroupProps: (): ComputedIndicatorGroupProps => ({
      role: 'radiogroup',
      id: `carousel::${carouselId}::indicator-group`,
      'data-scope': DATA_SCOPE,
      'data-part': 'indicator-group',
      'data-orientation': 'horizontal',
      dir: DIRECTION,
    }),

    getIndicatorProps: ({ index }): ComputedIndicatorProps => {
      const isActivePage = index === pageState

      return {
        role: 'radio',
        id: `carousel::${carouselId}::indicator:${index}`,
        'aria-checked': isActivePage,
        'data-scope': DATA_SCOPE,
        'data-part': 'indicator',
        'data-orientation': 'horizontal',
        'data-index': index,
        'data-state': isActivePage ? 'active' : 'inactive',
        tabIndex: isActivePage ? 0 : -1,
        onClick: () => {
          scrollTo(index, scrollBehavior)
        },
        onKeyDown: (event: React.KeyboardEvent) => {
          const focusActiveIndicator = (page: number) => {
            pageIndicatorsRefs.current[page]?.focus()
          }

          if (event.key === 'ArrowRight' && canScrollNext) {
            scrollNext(focusActiveIndicator)
          } else if (event.key === 'ArrowLeft' && canScrollPrev) {
            scrollPrev(focusActiveIndicator)
          }
        },
      }
    },
  }

  return contextValue
}
