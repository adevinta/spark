import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { SkeletonContext } from './SkeletonContext'

export interface SkeletonProps extends ComponentPropsWithoutRef<'div'> {
  isAnimated?: boolean
  // alignment?: 'left' | 'center' | 'right'
  // gap?: string
}

export const Skeleton = forwardRef<HTMLDivElement, PropsWithChildren<SkeletonProps>>(
  ({ isAnimated, children, ...rest }, forwardedRef) => (
    <SkeletonContext.Provider value={{ isAnimated }}>
      <div ref={forwardedRef} {...rest}>
        {children}
      </div>
    </SkeletonContext.Provider>
  )
)

Skeleton.displayName = 'Skeleton'
