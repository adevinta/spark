/* eslint-disable complexity */
import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from 'react'

import { useSkeleton } from './SkeletonContext'
import {
  skeletonCircleStyles,
  skeletonLineStyles,
  skeletonRectangleStyles,
} from './SkeletonItem.styles'

interface SkeletonItemProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
}

export type SkeletonRectangleProps = Omit<SkeletonItemProps, 'shape'> & {
  width?: string | number
  height?: string | number
}
export type SkeletonCircleProps = Omit<SkeletonItemProps, 'shape'> & { size: string | number }
export type SkeletonLineProps = Omit<SkeletonItemProps, 'shape'> & {
  lines?: number
  /**
   * Sets the default alignement.
   * @default start
   */
  align?: 'start' | 'center' | 'end'
  /**
   * Sets the gaps between group items.
   */
  gap?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

const getSizeValue = (size?: number | string): string | undefined => {
  if (typeof size === 'number') return `${size}px`

  return size
}

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

export const SkeletonLine = forwardRef<HTMLDivElement, SkeletonLineProps>(
  (
    { asChild = false, lines = 1, gap: gapProp, align = 'start', children, className, ...rest },
    forwardedRef
  ) => {
    const { isLoading: isLoadingCtx } = useSkeleton()
    const isLoading = !isLoadingCtx && !children ? true : isLoadingCtx

    const Component = !isLoading && asChild ? Slot : 'div'
    const gap = gapProp || 'md'

    if (!isLoadingCtx && !children) {
      console.error('Children content must be declared when using Skeleton loading state')
    }

    return (
      <Component
        ref={forwardedRef}
        {...(isLoading && {
          'aria-hidden': true,
          'data-part': 'linegroup',
        })}
        className={skeletonLineStyles({ align, gap, className })}
        {...rest}
      >
        {isLoading
          ? [...new Array(lines)].map((_, index) => (
              <div
                key={`line_${index}`}
                aria-hidden="true"
                data-part="line"
                className="flex min-h-lg w-full min-w-lg rounded-lg bg-neutral/dim-4 [&:last-child:not(:first-child)]:w-5/6"
              />
            ))
          : children}
      </Component>
    )
  }
)

SkeletonRectangle.displayName = 'Skeleton.Rectangle'
SkeletonCircle.displayName = 'Skeleton.Circle'
SkeletonLine.displayName = 'Skeleton.Line'
