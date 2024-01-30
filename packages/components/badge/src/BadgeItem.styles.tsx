import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const styles = cva(
  ['inline-flex h-fit', 'empty:p-none', 'text-center font-bold', 'rounded-full box-content'],
  {
    variants: {
      /**
       * Visual color appearance of the component.
       * @default 'danger'
       */
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
        main: ['bg-main', 'text-on-main', 'border-on-main'],
        support: ['bg-support', 'text-on-support', 'border-on-support'],
        accent: ['bg-accent', 'text-on-accent', 'border-on-accent'],
        success: ['bg-success', 'text-on-success', 'border-on-success'],
        alert: ['bg-alert', 'text-on-alert', 'border-on-alert'],
        danger: ['bg-error', 'text-on-error', 'border-on-error'],
        info: ['bg-info', 'text-on-info', 'border-on-info'],
        neutral: ['bg-neutral', 'text-on-neutral', 'border-on-neutral'],
        surface: ['bg-surface', 'text-on-surface', 'border-on-surface'],
        basic: ['bg-basic', 'text-on-basic', 'border-on-basic'],
      }),
      /**
       * Size of the component.
       * @default 'md'
       */
      size: makeVariants<'size', ['sm', 'md']>({
        sm: ['text-small', 'px-[var(--sz-6)] py-[var(--sz-2)]', 'empty:size-sz-8'],
        md: ['text-caption', 'px-md py-sm', 'empty:size-sz-16'],
      }),
      /**
       * Type of the component.
       * @default 'relative'
       */
      type: {
        relative: ['absolute right-none border-md', 'translate-x-1/2 -translate-y-1/2'],
        standalone: [],
      },
    },
    defaultVariants: {
      intent: 'danger',
      size: 'md',
      type: 'relative',
    },
  }
)

export type StylesProps = VariantProps<typeof styles>
