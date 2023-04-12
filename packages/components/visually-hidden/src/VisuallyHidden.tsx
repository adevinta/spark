import { Root as VisuallyHiddenRoot } from '@radix-ui/react-visually-hidden'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type SlotProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const VisuallyHidden = forwardRef<HTMLElement, SlotProps>((props, ref) => {
  return <VisuallyHiddenRoot ref={ref} {...props} />
})
