/* eslint-disable tailwindcss/no-custom-classname */
import { cva } from 'class-variance-authority'

export const wrapperStyles = cva(['relative flex'])

export const listStyles = cva([
  'flex',
  'spark-orientation-horizontal:flex-row',
  'spark-orientation-vertical:flex-col',
  'no-scrollbar overflow-x-auto overflow-y-hidden',
])

export const navigationArrowStyles = cva([
  'border-outline border-b-sm',
  'outline-none',
  'focus-visible:ring-outline-high focus-visible:bg-surface-hovered ring-inset focus-visible:border-none focus-visible:ring-2',
])
