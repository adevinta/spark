import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { type SkeletonStyleProps, skeletonStyles } from './Skeleton.styles'
import { SkeletonContext } from './SkeletonContext'
import { SkeletonGroup, type SkeletonGroupProps } from './SkeletonGroup'

export interface SkeletonProps
  extends ComponentPropsWithoutRef<'div'>,
    SkeletonStyleProps,
    SkeletonGroupProps {
  /**
   * Switch between skeleton and its children content during loading stage.
   * @default true
   */
  isLoading?: boolean
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
  (
    { isLoading = true, isAnimated: isAnimatedProp = true, label, className, children, ...rest },
    forwardedRef
  ) => {
    const isAnimated = isLoading ? isAnimatedProp : false

    return (
      <SkeletonContext.Provider value={{ isLoading }}>
        <SkeletonGroup
          ref={forwardedRef}
          data-spark-component="skeleton"
          className={skeletonStyles({ isAnimated, className })}
          {...rest}
        >
          {children}

          {label && <VisuallyHidden>{label}</VisuallyHidden>}
        </SkeletonGroup>
      </SkeletonContext.Provider>
    )
  }
)

Skeleton.displayName = 'Skeleton'
