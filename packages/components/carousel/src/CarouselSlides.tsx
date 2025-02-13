import { cx } from 'class-variance-authority'
import React, { ComponentProps, ReactNode } from 'react'

import { useCarouselContext } from './Carousel'
import { CarouselSlideProps } from './CarouselSlide'

interface Props extends ComponentProps<'div'> {
  children?: ReactNode
  className?: string
}

export const CarouselSlides = ({ children, className = '' }: Props) => {
  const ctx = useCarouselContext()

  const childrenElements = React.Children.toArray(children)

  return (
    <div
      {...ctx.getSlidesContainerProps()}
      className={cx('focus-visible:u-outline relative w-full default:rounded-lg', className)}
    >
      {childrenElements.map((child, index) =>
        React.isValidElement<CarouselSlideProps>(child)
          ? React.cloneElement(child, {
              index,
              totalSlides: childrenElements.length,
            })
          : child
      )}
    </div>
  )
}

CarouselSlides.displayName = 'Carousel.Slides'
