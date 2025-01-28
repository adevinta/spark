import { cx } from 'class-variance-authority'
import { ReactNode, useContext, useRef } from 'react'

import { CarouselContext } from './Carousel'
import { useVisibility } from './useVisibility'

export interface CarouselItemProps {
  isSnapPoint?: boolean
  children?: ReactNode
  index?: number
  className?: string
  style?: React.HTMLAttributes<HTMLLIElement>['style']
}

export const CarouselItem = ({
  children,
  index = 0,
  className = '',
  style = {},
}: CarouselItemProps) => {
  const ctx = useContext(CarouselContext)

  const isSnapPoint = ctx.snapPointIndexes.has(index)

  const itemRef = useRef<HTMLLIElement>(null)

  const visibilityState = useVisibility(itemRef, ctx.internalRef)
  const isVisible = visibilityState !== 'hidden'

  return (
    <li
      ref={itemRef}
      className={cx(
        'relative box-border shrink-0 overflow-y-hidden bg-neutral-container',
        'transition-opacity motion-reduce:transition-none',
        {
          'opacity-0': !isVisible && ctx.scrollBehavior === 'smooth',
          'duration-500': ctx.scrollBehavior === 'smooth',
        },
        className
      )}
      aria-hidden={!isVisible}
      inert={!isVisible}
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

CarouselItem.displayName = 'Carousel.Item'
