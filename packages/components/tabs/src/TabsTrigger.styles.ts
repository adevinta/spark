import { cva, type VariantProps } from 'class-variance-authority'

export const triggerVariants = cva(
  [
    'px-md',
    'relative flex flex-none items-center',
    'border-outline',
    'outline-none',
    'bg-surface hover:bg-surface-hovered',
    'after:absolute',
    'spark-orientation-horizontal:border-b-sm spark-orientation-horizontal:after:h-sz-2 spark-orientation-horizontal:after:left-none spark-orientation-horizontal:after:right-none spark-orientation-horizontal:after:bottom-[-1px]',
    'spark-orientation-vertical:border-r-sm spark-orientation-vertical:after:w-sz-2 spark-orientation-vertical:after:top-none spark-orientation-vertical:after:bottom-none spark-orientation-vertical:after:right-[-1px]',
    'focus-visible:ring-outline-high focus-visible:bg-surface-hovered ring-inset focus-visible:border-none focus-visible:ring-2',
    'spark-disabled:cursor-not-allowed spark-disabled:opacity-dim-3',
    'duration-300 ease-linear',
    'gap-md [&>*:first-child]:ml-md [&>*:last-child]:mr-md',
    '[&>svg:last-child:first-child]:mx-auto',
  ],
  {
    variants: {
      /**
       * Change the color scheme of the tabs
       * @default primary
       */
      intent: {
        primary: ['spark-state-active:text-primary spark-state-active:after:bg-primary'],
        secondary: ['spark-state-active:text-secondary spark-state-active:after:bg-secondary'],
      },
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
      intent: 'primary',
      size: 'md',
    },
  }
)

export type TabsTriggerVariantsProps = VariantProps<typeof triggerVariants>
