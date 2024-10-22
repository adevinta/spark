import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { type SkeletonStyleProps, skeletonStyles } from './Skeleton.styles'
import { SkeletonGroup, type SkeletonGroupProps } from './SkeletonGroup'

export interface SkeletonProps
  extends ComponentPropsWithoutRef<'div'>,
    SkeletonStyleProps,
    SkeletonGroupProps {
  /**
   * Displays an animated light effect.
   * @default true
   */
  isAnimated?: boolean
}

export const Skeleton = forwardRef<HTMLDivElement, PropsWithChildren<SkeletonProps>>(
  ({ isAnimated = true, className, children, ...rest }, forwardedRef) => (
    <SkeletonGroup
      ref={forwardedRef}
      data-spark-component="skeleton"
      className={skeletonStyles({ isAnimated, className })}
      {...rest}
    >
      {children}
    </SkeletonGroup>
  )
)

Skeleton.displayName = 'Skeleton'
