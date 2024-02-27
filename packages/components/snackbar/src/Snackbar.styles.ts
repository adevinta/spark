import { cva } from 'class-variance-authority'

export const snackbarRegionVariant = cva([
  'fixed bottom-lg inset-x-none z-toast',
  'outline-none pointer-events-none',
  'flex flex-col items-center gap-lg',
])
