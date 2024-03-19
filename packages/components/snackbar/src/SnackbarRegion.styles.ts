import { cva, type VariantProps } from 'class-variance-authority'

export const snackbarRegionVariant = cva(
  ['fixed inset-x-lg z-toast group', 'outline-none pointer-events-none', 'flex flex-col gap-lg'],
  {
    variants: {
      /**
       * Set snackbar item position
       * @default 'bottom'
       */
      position: {
        top: 'top-lg items-center',
        'top-right': 'top-lg items-end',
        'top-left': 'top-lg items-start',
        bottom: 'bottom-lg items-center',
        'bottom-right': 'bottom-lg items-end',
        'bottom-left': 'bottom-lg items-start',
      },
    },
    defaultVariants: {
      position: 'bottom',
    },
  }
)

export type SnackbarRegionVariantProps = VariantProps<typeof snackbarRegionVariant>
