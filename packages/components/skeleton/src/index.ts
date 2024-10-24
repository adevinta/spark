import { Skeleton as Root } from './Skeleton'
import { SkeletonGroup as Group } from './SkeletonGroup'
import {
  SkeletonCircle as Circle,
  SkeletonLine as Line,
  SkeletonRectangle as Rectangle,
} from './SkeletonItem'

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
