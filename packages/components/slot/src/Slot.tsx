import { Slot as SlotPrimitive } from '@radix-ui/react-slot'
import { forwardRef, PropsWithChildren } from 'react'

export { Slottable } from '@radix-ui/react-slot'

export type SlotProps = PropsWithChildren<React.HTMLAttributes<HTMLElement>>

export const Slot = forwardRef<HTMLElement, SlotProps>((props, ref) => {
  return <SlotPrimitive ref={ref} {...props} />
})
