/* eslint-disable complexity */
import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from 'react'

import { skeletonCircleStyles } from './SkeletonCircle.styles'
import { useSkeleton } from './SkeletonContext'

export interface SkeletonCircleProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
  size: string | number
}

const getSizeValue = (size?: number | string): string | undefined =>
  typeof size === 'number' ? `${size}px` : size

export const SkeletonCircle = forwardRef<HTMLDivElement, SkeletonCircleProps>(
  ({ asChild = false, size, children, className, ...rest }, forwardedRef) => {
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
          'data-part': 'circle',
        })}
        style={{ '--size': getSizeValue(size) } as CSSProperties}
        className={skeletonCircleStyles({
          isLoading,
          className: ['size-[--size]', className],
        })}
        {...rest}
      >
        {isLoading ? null : children}
      </Component>
    )
  }
)

SkeletonCircle.displayName = 'Skeleton.Circle'
