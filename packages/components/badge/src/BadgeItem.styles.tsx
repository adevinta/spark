import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { DEFAULT_INTENT, DEFAULT_SIZE, DEFAULT_TYPE } from './config'

export const styles = cva(
  ['inline-flex h-fit', 'empty:p-none', 'text-center font-bold', 'rounded-full'],
  {
    variants: {
      intent: makeVariants<
        'intent',
        [
          'main',
          'support',
          'accent',
          'success',
          'alert',
          'danger',
          'info',
          'neutral',
          'surface',
          'basic',
        ]
      >({
        main: ['bg-main', 'text-on-main', 'ring-on-main'],
        support: ['bg-support', 'text-on-support', 'ring-on-support'],
        accent: ['bg-accent', 'text-on-accent', 'ring-on-accent'],
        success: ['bg-success', 'text-on-success', 'ring-on-success'],
        alert: ['bg-alert', 'text-on-alert', 'ring-on-alert'],
        danger: ['bg-error', 'text-on-error', 'ring-on-error'],
        info: ['bg-info', 'text-on-info', 'ring-on-info'],
        neutral: ['bg-neutral', 'text-on-neutral', 'ring-on-neutral'],
        surface: ['bg-surface', 'text-on-surface', 'ring-on-surface'],
        basic: ['bg-basic', 'text-on-basic', 'ring-on-basic'],
      }),
      size: makeVariants<'size', ['sm', 'md']>({
        sm: ['text-small', 'px-[var(--sz-6)] py-[var(--sz-2)]', 'empty:h-sz-12 empty:w-sz-12'],
        md: ['text-caption', 'px-md py-sm', 'empty:h-sz-16 empty:w-sz-16'],
      }),
      type: {
        relative: ['relative -translate-x-2/4 -translate-y-2/4 ring-2'],
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
