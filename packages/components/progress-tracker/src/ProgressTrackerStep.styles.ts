import { cva, type VariantProps } from 'class-variance-authority'

export const stepWrapperVariant = cva(
  [
    'relative inline-flex flex-auto first:grow-0 justify-center',
    // Progress Track
    'before:absolute after:absolute before:z-base after:z-base',
    'before:h-[1px] after:h-[1px]',
    'before:bg-basic after:bg-basic',
    'before:left-none after:right-none',
    'first:before:content-none last:after:content-none',
  ],
  {
    variants: {
      size: {
        sm: [
          'pt-[calc(16px+theme("spacing.md"))]',
          'before:top-[8px] after:top-[8px]',
          'before:right-[calc(50%+12px)] after:left-[calc(50%+12px)]',
        ],
        md: [
          'pt-[calc(24px+theme("spacing.md"))]',
          'before:top-[12px] after:top-[12px]',
          'before:right-[calc(50%+16px)] after:left-[calc(50%+16px)]',
        ],
        lg: [
          'pt-[calc(32px+theme("spacing.md"))]',
          'before:top-[16px] after:top-[16px]',
          'before:right-[calc(50%+20px)] after:left-[calc(50%+20px)]',
        ],
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
)

export const stepButtonVariant = cva(
  [
    'block mx-sm mb-auto',
    'border-x-sm border-x-transparent',
    // Progress Indicator
    'before:[counter-increment:step] before:content-[counter(step)]',
    'before:absolute before:z-raised before:top-none before:left-[50%] before:translate-x-[-50%]',
    'before:flex before:items-center before:justify-center before:rounded-full',
    'before:border-sm before:text-on-basic-container',
    'before:text-body-2 before:font-bold',
    'hover:before:bg-basic/dim-5',
  ],
  {
    variants: {
      size: {
        sm: ['before:w-[16px] before:h-[16px]', 'before:content-[""]'],
        md: 'before:w-[24px] before:h-[24px]',
        lg: 'before:w-[32px] before:h-[32px]',
      },
      active: {
        true: 'before:bg-basic-container',
        false: '',
      },
      disabled: {
        true: 'opacity-dim-3',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
      disabled: false,
      size: 'lg',
    },
  }
)

export type ProgressTrackerStepVariantsProps = VariantProps<typeof stepButtonVariant>
