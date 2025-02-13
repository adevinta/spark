import { CSSProperties, Ref, RefObject } from 'react'

export const DATA_SCOPE = 'carousel' as const
export const DIRECTION = 'ltr' as const

export interface UseCarouselProps {
  defaultPage?: number
  page?: number
  gap?: number
  snapType?: 'proximity' | 'mandatory'
  snapStop?: 'always' | 'normal'
  scrollPadding?: number
  slidesPerPage?: number
  slidesPerMove?: number | 'auto'
  loop?: boolean
  scrollBehavior?: 'instant' | 'smooth'
  onPageChange?: (pageIndex: number) => void
}

export interface ComputedRootProps {
  id: string
  role: 'region'
  'aria-roledescription': 'carousel'
  'data-scope': typeof DATA_SCOPE
  'data-part': 'root'
  'data-orientation': 'horizontal'
  dir: typeof DIRECTION
  style: CSSProperties & {
    '--slides-per-page': number
    '--slide-spacing': string
    '--slide-item-size': string
  }
}

export interface ComputedControlProps {
  'data-scope': typeof DATA_SCOPE
  'data-part': 'control'
  'data-orientation': 'horizontal'
}

export interface ComputedTriggerProps<T extends 'prev-trigger' | 'next-trigger'> {
  id: string
  'aria-controls': string
  'data-scope': typeof DATA_SCOPE
  'data-part': T
  'data-orientation': 'horizontal'
  type: 'button'
  dir: typeof DIRECTION
  disabled: boolean
  onClick: () => void
}

export interface ComputedSlideGroupProps {
  id: string
  'aria-live': 'polite'
  'data-scope': typeof DATA_SCOPE
  'data-part': 'item-group'
  'data-orientation': 'horizontal'
  dir: typeof DIRECTION
  tabIndex: 0
  style: CSSProperties
  ref: Ref<HTMLDivElement | null>
}

export interface ComputedSlideProps {
  id: string
  role: 'group'
  'aria-roledescription': 'slide'
  'data-scope': typeof DATA_SCOPE
  'data-part': 'item'
  'data-index': number
  'data-orientation': 'horizontal'
  dir: typeof DIRECTION
  style: CSSProperties
}

export interface ComputedIndicatorGroupProps {
  role: 'radiogroup'
  id: string
  'data-scope': typeof DATA_SCOPE
  'data-part': 'indicator-group'
  'data-orientation': 'horizontal'
  dir: typeof DIRECTION
}

export interface ComputedIndicatorProps {
  role: 'radio'
  id: string
  'aria-checked': boolean
  'data-scope': typeof DATA_SCOPE
  'data-part': 'indicator'
  'data-orientation': 'horizontal'
  'data-index': number
  'data-state': 'active' | 'inactive'
  tabIndex: 0 | -1
  onClick: () => void
  onKeyDown: (event: React.KeyboardEvent) => void
}

interface AnatomyPropsSetters {
  getRootProps: () => ComputedRootProps
  getControlProps: () => ComputedControlProps
  getPrevTriggerProps: () => ComputedTriggerProps<'prev-trigger'>
  getNextTriggerProps: () => ComputedTriggerProps<'next-trigger'>
  getSlidesContainerProps: () => ComputedSlideGroupProps
  getSlideProps: (props: { index: number; totalSlides: number }) => ComputedSlideProps
  getIndicatorGroupProps: () => ComputedIndicatorGroupProps
  getIndicatorProps: (props: { index: number }) => ComputedIndicatorProps
}

export interface CarouselAPI extends AnatomyPropsSetters {
  ref: RefObject<HTMLElement | null>
  pageIndicatorsRefs: RefObject<(HTMLElement | null)[] | null>
  gap: number
  page: number
  pageSnapPoints: number[]
  canScrollNext: boolean
  canScrollPrev: boolean
  scrollTo: (pageIndex: number, behavior: 'instant' | 'smooth') => void
  scrollPrev: () => void
  scrollNext: () => void
  loop: boolean
  scrollPadding: number
  slidesPerPage: number
  slidesPerMove: number | 'auto'
  snapType: UseCarouselProps['snapType']
  snapStop: UseCarouselProps['snapStop']
  scrollBehavior: UseCarouselProps['scrollBehavior']
}
