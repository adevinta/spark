import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export interface SkeletonProps extends ComponentPropsWithoutRef<'div'> {
  isAnimated?: boolean
}

export const Skeleton = forwardRef<HTMLDivElement, PropsWithChildren<SkeletonProps>>(
  ({ children, ...rest }, forwardedRef) => (
    <div ref={forwardedRef} {...rest}>
      {children}
    </div>
  )
)

Skeleton.displayName = 'Skeleton'
