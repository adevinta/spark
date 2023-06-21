import { cva } from 'class-variance-authority'

export const wrapperStyles = cva(['relative flex'])

export const listStyles = cva([
  'flex w-full',
  'spark-orientation-horizontal:flex-row',
  'spark-orientation-vertical:flex-col',
  'overflow-y-hidden u-no-scrollbar spark-orientation-vertical:overflow-x-hidden',
  'after:flex after:shrink after:grow after:border-outline',
  'spark-orientation-horizontal:after:border-b-sm',
  'spark-orientation-vertical:after:border-r-sm',
])

export const navigationArrowStyles = cva([
  '!h-auto flex-none',
  'border-b-sm border-outline',
  'outline-none',
  'ring-inset focus-visible:border-none focus-visible:bg-surface-hovered focus-visible:ring-2 focus-visible:ring-outline-high',
])
