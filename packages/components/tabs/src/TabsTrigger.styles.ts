import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const triggerVariants = cva(
  [
    'px-md',
    'relative flex flex-none items-center',
    'border-outline',
    'outline-none',
    'bg-surface hover:bg-surface-hovered',
    'after:absolute',
    'spark-orientation-horizontal:border-b-sm spark-orientation-horizontal:after:inset-x-none spark-orientation-horizontal:after:bottom-[-1px] spark-orientation-horizontal:after:h-sz-2',
    'spark-orientation-vertical:border-r-sm spark-orientation-vertical:after:inset-y-none spark-orientation-vertical:after:right-[-1px] spark-orientation-vertical:after:w-sz-2',
    'ring-inset focus-visible:border-none focus-visible:bg-surface-hovered focus-visible:ring-2 focus-visible:ring-outline-high',
    'spark-disabled:cursor-not-allowed spark-disabled:opacity-dim-3',
    'duration-300 ease-linear',
    'gap-md [&>*:first-child]:ml-md [&>*:last-child]:mr-md',
    '[&>svg:last-child:first-child]:mx-auto',
  ],
  {
    variants: {
      /**
       * Change the color scheme of the tabs
       * @default basic
       */
      intent: makeVariants<'intent', ['main', 'support', 'basic']>({
        main: ['spark-state-active:text-main spark-state-active:after:bg-main'],
        support: ['spark-state-active:text-support spark-state-active:after:bg-support'],
        basic: ['spark-state-active:text-basic spark-state-active:after:bg-basic'],
      }),
      /**
       * Change the size of the tabs
       * @default md
       */
      size: {
        xs: ['h-sz-32 min-w-sz-32 text-caption'],
        sm: ['h-sz-36 min-w-sz-36 text-body-2'],
        md: ['h-sz-40 min-w-sz-40 text-body-1'],
      },
    },
    defaultVariants: {
      intent: 'basic',
      size: 'md',
    },
  }
)

export type TabsTriggerVariantsProps = VariantProps<typeof triggerVariants>
