import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type RatingProps = ComponentPropsWithoutRef<'div'>

export const Rating = forwardRef<HTMLDivElement, PropsWithChildren<RatingProps>>((props, ref) => {
  return <div ref={ref} {...props} />
})
