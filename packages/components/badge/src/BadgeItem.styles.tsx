import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { DEFAULT_INTENT, DEFAULT_SIZE, DEFAULT_TYPE } from './config'

export const styles = cva(
  ['inline-flex h-fit', 'empty:p-none', 'text-center font-bold', 'rounded-full outline outline-2'],
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
      type: {
        relative: ['relative -translate-x-2/4 -translate-y-2/4'],
        standalone: [],
      },
    },
    defaultVariants: {
      intent: DEFAULT_INTENT,
      size: DEFAULT_SIZE,
      type: DEFAULT_TYPE,
    },
  }
)

export type StylesProps = VariantProps<typeof styles>
