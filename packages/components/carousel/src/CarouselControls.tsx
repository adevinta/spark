import React, { ReactNode } from 'react'

import { useCarouselContext } from './Carousel'

const getComponentName = (child: React.ReactNode) =>
  React.isValidElement(child) && typeof child.type === 'function' ? child.type.name : 'unknown'

const OrderedButtons = ({ children }: { children: ReactNode }) => {
  return React.Children.toArray(children).sort((childA, childB) => {
    const order: { [key: string]: number } = { CarouselNextButton: 1, CarouselPrevButton: 2 }

    return (order[getComponentName(childA)] ?? 0) - (order[getComponentName(childB)] ?? 0)
  })
}

interface ControlsProps {
  children: ReactNode
}

export const CarouselControls = ({ children }: ControlsProps) => {
  const ctx = useCarouselContext()

  return (
    <div
      className="default:px-lg pointer-events-none absolute inset-0 flex flex-row-reverse items-center justify-between"
      {...ctx.getControlProps()}
    >
      <OrderedButtons>{children}</OrderedButtons>
    </div>
  )
}

CarouselControls.displayName = 'Carousel.Controls'
