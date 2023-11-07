import { cva } from 'class-variance-authority'

export const rootStyles = cva([
  'flex relative h-sz-24 items-center',
  'touch-none select-none',
  'spark-disabled:cursor-not-allowed spark-disabled:opacity-dim-3',
])
