import { cva } from 'class-variance-authority'

export const rootStyles = cva([
  'flex',
  'spark-orientation-horizontal:flex-col',
  'spark-orientation-vertical:flex-row',
  'max-w-full',
])
