import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { useSkeleton } from './SkeletonContext'
import { type SkeletonGroupStyleProps, skeletonGroupStyles } from './SkeletonGroup.styles'

export interface SkeletonGroupProps
  extends ComponentPropsWithoutRef<'div'>,
    SkeletonGroupStyleProps {
  /**
   * Sets the main axis direction.
   * @default row
   */
  direction?: 'row' | 'column'
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

export const SkeletonGroup = forwardRef<HTMLDivElement, PropsWithChildren<SkeletonGroupProps>>(
  ({ gap, direction = 'row', align = 'start', className, children, ...rest }, forwardedRef) => {
    const { isLoading } = useSkeleton()

    return (
      <div
        ref={forwardedRef}
        {...(isLoading && { 'data-part': 'group' })}
        className={skeletonGroupStyles({ gap, direction, align, className })}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

SkeletonGroup.displayName = 'Skeleton.Group'
