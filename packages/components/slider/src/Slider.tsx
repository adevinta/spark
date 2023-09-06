import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type SliderProps = ComponentPropsWithoutRef<'div'>

export const Slider = forwardRef<HTMLDivElement, PropsWithChildren<SliderProps>>((props, ref) => {
  return <div ref={ref} {...props} />
})
