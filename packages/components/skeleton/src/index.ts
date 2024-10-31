import { Skeleton as Root } from './Skeleton'
import { SkeletonCircle as Circle } from './SkeletonCircle'
import { SkeletonGroup as Group } from './SkeletonGroup'
import { SkeletonLine as Line } from './SkeletonLine'
import { SkeletonRectangle as Rectangle } from './SkeletonRectangle'

export const Skeleton: typeof Root & {
  Circle: typeof Circle
  Line: typeof Line
  Rectangle: typeof Rectangle
  Group: typeof Group
} = Object.assign(Root, {
  Circle,
  Line,
  Rectangle,
  Group,
})

Skeleton.displayName = 'Skeleton'
Group.displayName = 'Skeleton.Group'
Line.displayName = 'Skeleton.Line'
Circle.displayName = 'Skeleton.Circle'
Rectangle.displayName = 'Skeleton.Rectangle'

export type { SkeletonProps } from './Skeleton'
