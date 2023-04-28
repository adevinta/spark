import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const styles = cva(
  ['inline-flex h-fit', 'empty:p-none', 'text-center font-bold', 'border-md rounded-full'],
  {
    variants: {
      intent: makeVariants<'intent', ['error', 'info']>({
        error: ['bg-error', 'text-on-error'],
        info: ['bg-info', 'text-on-info'],
      }),
      size: makeVariants<'size', ['sm', 'md']>({
        sm: ['text-small', 'px-[var(--sz-6)] py-[var(--sz-2)]', 'empty:h-sz-12 empty:w-sz-12'],
        md: ['text-caption', 'px-md py-sm', 'empty:h-sz-16 empty:w-sz-16'],
      }),
      type: makeVariants<'type', ['relative', 'standalone']>({
        relative: ['-left-lg empty:-left-md relative'],
        standalone: [],
      }),
    },
    compoundVariants: [
      {
        size: 'sm',
        type: 'relative',
        class: ['-top-md empty:-top-sm'],
      },
      {
        size: 'md',
        type: 'relative',
        class: ['-top-lg empty:-top-sm'],
      },
    ],
    defaultVariants: {
      intent: 'error',
      size: 'md',
      type: 'relative',
    },
  }
)

export type StylesProps = VariantProps<typeof styles>
