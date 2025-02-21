import { cx } from 'class-variance-authority'
import React, {
  ComponentPropsWithoutRef,
  CSSProperties,
  ReactNode,
  Ref,
  RefObject,
  useContext,
} from 'react'

import { ScrollingListContext } from './ScrollingList'
import { ScrollingListItemProps } from './ScrollingListItem'

interface Props extends ComponentPropsWithoutRef<'div'> {
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

export const ScrollingListItems = ({ children, className = '', ...rest }: Props) => {
  const ctx = useContext(ScrollingListContext)

  const snapConfig = {
    mandatory: 'x mandatory',
    proximity: 'x proximity',
    none: 'none',
  }

  const handleLeftArrow = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!ctx.loop && !ctx.hasPrevPage) return

    event.preventDefault()
    ctx.goTo(ctx.hasPrevPage ? ctx.activePageIndex - 1 : ctx.pages.length - 1, {
      behavior: ctx.scrollBehavior,
    })
  }

  const handleRightArrow = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!ctx.loop && !ctx.hasNextPage) return

    event.preventDefault()
    ctx.goTo(ctx.hasNextPage ? ctx.activePageIndex + 1 : 0, { behavior: ctx.scrollBehavior })
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      handleLeftArrow(event)
    }

    if (event.key === 'ArrowRight') {
      handleRightArrow(event)
    }
  }

  interface CustomCSSProperties extends CSSProperties {
    '--scrolling-list-gap'?: string
    '--scrolling-list-px'?: string
  }

  const inlineStyles: CustomCSSProperties = {
    scrollSnapType: snapConfig[ctx.snapType],
    scrollPaddingInline: 'var(--scrolling-list-px)',
    '--scrolling-list-px': `${ctx.scrollPadding}px`,
    '--scrolling-list-gap': `${ctx.gap}px`,
  }

  return (
    <div
      id="scrolling-list-items"
      role="list"
      className={cx(
        'u-no-scrollbar w-full gap-(--scrolling-list-gap) overflow-x-auto scroll-smooth default:flex default:flex-row',
        'focus-visible:u-outline',
        className
      )}
      ref={mergeRefs<HTMLDivElement>(ctx.scrollAreaRef, ctx.scrollRef)}
      style={inlineStyles}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement<ScrollingListItemProps>(child)
          ? React.cloneElement(child, { index })
          : child
      )}
    </div>
  )
}

ScrollingListItems.displayName = 'ScrollingList.Items'
