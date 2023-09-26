import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type ToggleProps = ComponentPropsWithoutRef<'div'>

export const Toggle = forwardRef<HTMLDivElement, PropsWithChildren<ToggleProps>>((props, ref) => {
  return <div ref={ref} {...props} />
})
