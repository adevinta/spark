/* eslint-disable complexity */
import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from 'react'

import { useSkeleton } from './SkeletonContext'
import { skeletonRectangleStyles } from './SkeletonRectangle.styles'

export interface SkeletonRectangleProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
  width?: string | number
  height?: string | number
}

const getSizeValue = (size?: number | string): string | undefined =>
  typeof size === 'number' ? `${size}px` : size

export const SkeletonRectangle = forwardRef<HTMLDivElement, SkeletonRectangleProps>(
  ({ asChild = false, width = '100%', height, children, className, ...rest }, forwardedRef) => {
    const { isLoading: isLoadingCtx } = useSkeleton()
    const isLoading = !isLoadingCtx && !children ? true : isLoadingCtx

    const Component = !isLoading && asChild ? Slot : 'div'

    if (!isLoadingCtx && !children) {
      console.error('Children content must be declared when using Skeleton loading state')
    }

    return (
      <Component
        ref={forwardedRef}
        {...(isLoading && {
          'aria-hidden': true,
          'data-part': 'rectangle',
        })}
        style={
          {
            '--width': getSizeValue(width),
            '--height': getSizeValue(height),
          } as CSSProperties
        }
        className={skeletonRectangleStyles({
          isLoading,
          className: ['h-[--height] w-[--width]', className],
        })}
        {...rest}
      >
        {isLoading ? null : children}
      </Component>
    )
  }
)

SkeletonRectangle.displayName = 'Skeleton.Rectangle'
