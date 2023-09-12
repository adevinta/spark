import { Portal as PortalPrimitive } from '@radix-ui/react-portal'
import type * as Radix from '@radix-ui/react-primitive'
import React, { forwardRef, type PropsWithChildren } from 'react'

interface PortalProps {
  /**
   * An optional different container where the portaled content should be appended.
   */
  container?: HTMLElement | null
}

type PortalRef = React.ElementRef<typeof Radix.Primitive.div>

export const Portal = forwardRef<PortalRef, PropsWithChildren<PortalProps>>((props, ref) => {
  return <PortalPrimitive ref={ref} {...props} />
})
