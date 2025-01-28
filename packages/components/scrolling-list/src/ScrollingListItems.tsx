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

import { ScrollingListContext } from './ScrollingList'
import { ScrollingListItemProps } from './ScrollingListItem'
import { useDynamicScrollWidth } from './useScrollWidth'

interface Props {
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

export const ScrollingListItems = ({ children, className = '' }: Props) => {
  const ctx = useContext(ScrollingListContext)

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
    '--scrolling-list-gap'?: string
    '--scrolling-list-px'?: string
  }

  const inlineStyles: CustomCSSProperties = {
    scrollSnapType: snapConfig[ctx.snapType],
    ...(ctx.itemsPerSlide && {
      gridAutoColumns: `calc((100% - (var(--scrolling-list-px) * 2) - (var(--scrolling-list-gap) * (${ctx.itemsPerSlide} - 1))) / ${ctx.itemsPerSlide})`,
      scrollPaddingLeft: 'var(--scrolling-list-px)',
      scrollPaddingRight: 'var(--scrolling-list-px)',
    }),
    '--scrolling-list-px': '44px',
    '--scrolling-list-gap': '16px',
  }

  return (
    <ul
      id="scrolling-list-items"
      role="group"
      aria-roledescription="carousel"
      aria-labelledby="TODO"
      className={cx(
        'flex w-full gap-[--scrolling-list-gap] overflow-x-auto scroll-smooth u-no-scrollbar',
        'focus-visible:outline-none focus-visible:u-ring',
        ctx.itemsPerSlide ? 'grid grid-flow-col' : 'flex flex-row',
        className
      )}
      ref={mergeRefs<HTMLUListElement>(internalRef, ctx.scrollRef)}
      style={inlineStyles}
      onKeyDown={handleKeyDown}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement<ScrollingListItemProps>(child)
          ? React.cloneElement(child, { index })
          : child
      )}
    </ul>
  )
}

ScrollingListItems.displayName = 'ScrollingList.Items'
