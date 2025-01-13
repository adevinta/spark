import { Portal as PortalPrimitive } from '@radix-ui/react-portal'
import React, { type PropsWithChildren, Ref } from 'react'

interface PortalProps {
  /**
   * An optional different container where the portaled content should be appended.
   */
  container?: HTMLElement | null
  ref?: Ref<HTMLDivElement>
}

export const Portal = (props: PropsWithChildren<PortalProps>) => {
  return <PortalPrimitive {...props} />
}
