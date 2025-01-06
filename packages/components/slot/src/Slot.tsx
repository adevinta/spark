import { Slot as SlotPrimitive } from '@radix-ui/react-slot'
import React, { forwardRef, PropsWithChildren, ReactNode } from 'react'

export { Slottable } from '@radix-ui/react-slot'

export type SlotProps = PropsWithChildren<React.HTMLAttributes<HTMLElement>>

export const Slot = forwardRef<HTMLElement, SlotProps>((props, ref) => {
  return <SlotPrimitive ref={ref} {...props} />
})

/**
 * When using Radix `Slot` component, it will consider its first child to merge its props with.
 * In some cases, you might need to wrap the top child with additional markup without breaking this behaviour.
 */
export const wrapPolymorphicSlot = (
  asChild: boolean | undefined,
  children: ReactNode,
  callback: (children: ReactNode) => ReactNode
) => {
  if (!asChild) return callback(children) // If polymorphic behaviour is not used, we keep the original children

  return React.isValidElement(children)
    ? React.cloneElement(
        children,
        undefined,
        callback((children.props as { children: ReactNode }).children)
      )
    : null
}
