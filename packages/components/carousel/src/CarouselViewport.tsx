import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const CarouselViewport = ({ children }: Props) => {
  return (
    <div className="relative box-border flex items-center justify-around p-none">{children}</div>
  )
}

CarouselViewport.displayName = 'Carousel.Viewport'
