import { Root as VisuallyHiddenRoot } from '@radix-ui/react-visually-hidden'
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export type VisuallyHiddenProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const VisuallyHidden = forwardRef<HTMLElement, VisuallyHiddenProps>((props, ref) => {
  return <VisuallyHiddenRoot ref={ref} {...props} />
})

VisuallyHidden.displayName = 'VisuallyHidden'
