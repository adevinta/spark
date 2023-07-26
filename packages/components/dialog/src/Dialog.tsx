import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type DialogProps = ComponentPropsWithoutRef<'div'>

export const Dialog = forwardRef<HTMLDivElement, PropsWithChildren<DialogProps>>((props, ref) => {
  return <div ref={ref} {...props} />
})
