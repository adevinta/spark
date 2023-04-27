import { cva } from 'class-variance-authority'

export const wrapperStyles = cva(['relative flex'])

export const listStyles = cva([
  'flex w-full',
  'spark-orientation-horizontal:flex-row',
  'spark-orientation-vertical:flex-col',
  'no-scrollbar overflow-x-auto overflow-y-hidden',
  'after:border-outline after:flex after:shrink after:grow',
  'spark-orientation-horizontal:after:border-b-sm',
  'spark-orientation-vertical:after:border-r-sm',
])

export const navigationArrowStyles = cva([
  '!h-auto flex-none',
  'border-outline border-b-sm',
  'outline-none',
  'focus-visible:ring-outline-high focus-visible:bg-surface-hovered ring-inset focus-visible:border-none focus-visible:ring-2',
])
