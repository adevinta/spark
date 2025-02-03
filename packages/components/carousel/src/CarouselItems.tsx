import { cx } from 'class-variance-authority'
import React, { ComponentProps, ReactNode } from 'react'

import { useCarouselContext } from './Carousel'
import { CarouselItemProps } from './CarouselItem'

interface Props extends ComponentProps<'ul'> {
  children?: ReactNode
  className?: string
}

export const CarouselItems = ({ children, className = '' }: Props) => {
  const ctx = useCarouselContext()

  const childrenElements = React.Children.toArray(children)

  return (
    <ul
      {...ctx.getItemGroupProps()}
      className={cx('focus-visible:u-outline relative w-full rounded-lg', className)}
    >
      {childrenElements.map((child, index) =>
        React.isValidElement<CarouselItemProps>(child)
          ? React.cloneElement(child, {
              index,
              totalItems: childrenElements.length,
            })
          : child
      )}
    </ul>
  )
}

CarouselItems.displayName = 'Carousel.Items'
