import { cva } from 'class-variance-authority'

export const rootStyles = cva([
  'flex relative items-center',
  'spark-disabled:cursor-not-allowed spark-disabled:opacity-dim-3',
])
