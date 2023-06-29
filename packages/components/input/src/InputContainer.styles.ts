import { cva, VariantProps } from 'class-variance-authority'

export const inputContainerStyles = cva(
  [
    'absolute',
    'top-none',
    'left-none',
    'h-full',
    'w-full',
    'pointer-events-none',
    'rounded-lg',
    'border-sm',
    'peer-focus:border-md',
    'peer-disabled:border-on-surface/dim-3',
    'peer-disabled:peer-hover:border-on-surface/dim-3',
  ],
  {
    variants: {
      status: {
        neutral: [
          'border-outline',
          'peer-hover:border-outline-high',
          'peer-focus:border-outline-high',
        ],
        success: ['border-success'],
        alert: ['border-alert'],
        error: ['border-error'],
      },
    },
  }
)

export type InputContainerStylesProps = VariantProps<typeof inputContainerStyles>
