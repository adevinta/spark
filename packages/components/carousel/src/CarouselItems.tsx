import { cx } from 'class-variance-authority'
import React, {
  CSSProperties,
  ReactNode,
  Ref,
  RefObject,
  useContext,
  useEffect,
  useRef,
} from 'react'

import { CarouselContext } from './Carousel'
import { CarouselItemProps } from './CarouselItem'
import { useDynamicScrollWidth } from './useScrollWidth'

interface Props {
  gap?: number
  children?: ReactNode
  className?: string
}

export function mergeRefs<T>(...refs: (Ref<T> | undefined | null)[]): Ref<T> {
  return (value: T | null) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value)
      } else if (ref && typeof ref === 'object' && 'current' in ref) {
        ;(ref as RefObject<T | null>).current = value
      }
    })
  }
}

export const CarouselItems = ({ gap = 16, children, className = '' }: Props) => {
  const ctx = useContext(CarouselContext)

  const internalRef = useRef<HTMLUListElement>(null)

  const scrollWidth = useDynamicScrollWidth(internalRef)

  useEffect(() => {
    setTimeout(() => {
      ctx.refresh()
    }, 0)
  }, [scrollWidth])

  const snapConfig = {
    mandatory: 'x mandatory',
    proximity: 'x proximity',
    none: 'none',
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowLeft') {
      if (!ctx.loop && !ctx.hasPrevPage) return

      const nextPage = ctx.hasPrevPage ? ctx.activePageIndex - 1 : ctx.pages.length - 1

      event.preventDefault()
      ctx.goTo(nextPage, { behavior: ctx.scrollBehavior })
    }

    if (event.key === 'ArrowRight') {
      if (!ctx.loop && !ctx.hasNextPage) return

      const nextPage = ctx.hasNextPage ? ctx.activePageIndex + 1 : 0

      event.preventDefault()
      ctx.goTo(nextPage, { behavior: ctx.scrollBehavior })
    }
  }

  interface CustomCSSProperties extends CSSProperties {
    '--carousel-gap'?: string
    '--carousel-px'?: string
  }

  const inlineStyles: CustomCSSProperties = {
    scrollSnapType: snapConfig[ctx.snapType],
    gridAutoColumns: `calc((100% - (var(--carousel-px) * 2) - (var(--carousel-gap) * (${ctx.itemsPerSlide} - 1))) / ${ctx.itemsPerSlide})`,
    scrollPaddingLeft: 'var(--carousel-px)',
    scrollPaddingRight: 'var(--carousel-px)',
    '--carousel-px': '0px',
    '--carousel-gap': `${gap}px`,
  }

  return (
    <ul
      id="carousel-items"
      role="group"
      aria-roledescription="carousel"
      aria-labelledby="TODO"
      className={cx(
        'grid w-full grid-flow-col gap-[--carousel-gap] overflow-x-auto scroll-smooth u-no-scrollbar',
        'focus-visible:outline-none focus-visible:u-ring',
        // 'mx-[60px]',
        className
      )}
      ref={mergeRefs<HTMLUListElement>(internalRef, ctx.scrollRef)}
      style={inlineStyles}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement<CarouselItemProps>(child)
          ? React.cloneElement(child, { index })
          : child
      )}
    </ul>
  )
}

CarouselItems.displayName = 'Carousel.Items'
