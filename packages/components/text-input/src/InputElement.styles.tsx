import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const inputElementWrapperStyles = cva(
  [
    'relative',
    'border-sm',
    'rounded-lg',
    'w-[25ch]',
    'min-w-0',
    'h-[42px]',
    'flex',
    'items-center',
    'justify-between',
    'box-content',
    'pl-lg',
    'pr-lg'
  ],
  {
    variants: {
      /**
       * Color scheme of the button.
       */
      intent: makeVariants<'intent'>({
        primary: [],
        secondary: [],
        success: [],
        alert: [],
        danger: [],
        neutral: [],
        surface: [],
      }),
    },
  }
)

export const inputElementStyles = cva([
  'h-xl',
  'text-body-1',
  'absolute',
  'focus-visible:outline-0',
  'text-ellipsis',
  'bg-transparent',
  'inset-x-lg',
])

export type InputElementStylesProps = VariantProps<typeof inputElementWrapperStyles>
