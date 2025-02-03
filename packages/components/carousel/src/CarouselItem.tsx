import { cx } from 'class-variance-authority'
import { ComponentProps, ReactNode, useRef } from 'react'

import { useCarouselContext } from './Carousel'
import { useIsVisible } from './useIsVisible'

export interface CarouselItemProps extends ComponentProps<'li'> {
  isSnapPoint?: boolean
  children?: ReactNode
  index?: number
  totalItems?: number
  className?: string
}

export const CarouselItem = ({
  children,
  index = 0,
  totalItems,
  className = '',
}: CarouselItemProps) => {
  const itemRef = useRef<HTMLLIElement>(null)
  const ctx = useCarouselContext()

  const isVisible = useIsVisible(itemRef, ctx.ref)

  return (
    <li
      ref={itemRef}
      {...ctx.getItemProps({ index, totalItems: totalItems as number })}
      className={cx(
        'bg-surface relative overflow-hidden rounded-lg',
        'transition-opacity duration-500 motion-reduce:transition-none',
        className
      )}
      aria-hidden={!isVisible}
      inert={!isVisible}
    >
      {children}
    </li>
  )
}

CarouselItem.displayName = 'Carousel.Item'
