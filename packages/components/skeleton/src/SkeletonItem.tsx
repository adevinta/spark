import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from 'react'

import {
  type SkeletonItemStyleProps,
  skeletonItemStyles,
  skeletonLineStyles,
} from './SkeletonItem.styles'

interface SkeletonItemProps extends ComponentPropsWithoutRef<'div'>, SkeletonItemStyleProps {}

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
  alignment?: 'start' | 'center' | 'end'
  /**
   * Sets the gaps between group items.
   */
  gap?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
}

const getSizeValue = (size?: number | string): string | undefined => {
  if (typeof size === 'number') return `${size}px`

  return size
}

const SkeletonItem = forwardRef<HTMLDivElement, SkeletonItemProps>(
  ({ shape, className, ...rest }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        aria-hidden="true"
        className={skeletonItemStyles({ shape, className })}
        {...rest}
      />
    )
  }
)

export const SkeletonRectangle = ({ width = '100%', height, ...rest }: SkeletonRectangleProps) => {
  return (
    <SkeletonItem
      style={
        {
          '--skeleton-rect-width': getSizeValue(width),
          '--skeleton-rect-height': getSizeValue(height),
        } as CSSProperties
      }
      className="h-[--skeleton-rect-height] w-[--skeleton-rect-width]"
      {...rest}
      shape="rectangle"
      data-part="rectangle"
    />
  )
}

export const SkeletonCircle = ({ size, ...rest }: SkeletonCircleProps) => (
  <SkeletonItem
    style={{ '--skeleton-circle-size': getSizeValue(size) } as CSSProperties}
    className="size-[--skeleton-circle-size]"
    {...rest}
    shape="circle"
    data-part="circle"
  />
)

export const SkeletonLine = ({
  lines = 1,
  gap: gapProp,
  alignment = 'start',
  className,
  ...rest
}: SkeletonLineProps) => {
  const gap = gapProp || (lines > 1 ? 'md' : undefined)

  return (
    <div className={skeletonLineStyles({ alignment, gap, className })} data-part="linegroup">
      {[...new Array(lines)].map((_, index) => (
        <SkeletonItem key={`line_${index}`} {...rest} shape="line" data-part="line" />
      ))}
    </div>
  )
}

SkeletonRectangle.displayName = 'Skeleton.Rectangle'
SkeletonCircle.displayName = 'Skeleton.Circle'
SkeletonLine.displayName = 'Skeleton.Line'
