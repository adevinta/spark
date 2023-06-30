import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type ChipProps = ComponentPropsWithoutRef<'div'>

export const Chip = forwardRef<HTMLDivElement, PropsWithChildren<ChipProps>>((props, ref) => {
  return <div ref={ref} {...props} />
})
