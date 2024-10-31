/* eslint-disable complexity */
import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { useSkeleton } from './SkeletonContext'
import { skeletonLineStyles } from './SkeletonLine.styles'

export interface SkeletonLineProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean
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

SkeletonLine.displayName = 'Skeleton.Line'
