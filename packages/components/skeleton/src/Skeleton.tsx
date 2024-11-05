import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { type SkeletonStyleProps, skeletonStyles } from './Skeleton.styles'

export interface SkeletonProps extends ComponentPropsWithoutRef<'div'>, SkeletonStyleProps {
  /**
   * Displays an animated light effect.
   * @default true
   */
  isAnimated?: boolean
  /**
   * Adds an accessible fallback label.
   */
  label?: string
}

export const Skeleton = forwardRef<HTMLDivElement, PropsWithChildren<SkeletonProps>>(
  ({ isAnimated = true, label, className, children, ...rest }, forwardedRef) => (
    <div
      ref={forwardedRef}
      data-spark-component="skeleton"
      className={skeletonStyles({ isAnimated, className })}
      {...rest}
    >
      {children}

      {label && <VisuallyHidden>{label}</VisuallyHidden>}
    </div>
  )
)

Skeleton.displayName = 'Skeleton'
