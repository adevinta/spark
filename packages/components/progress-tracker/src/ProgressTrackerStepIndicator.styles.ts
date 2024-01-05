import { cva } from 'class-variance-authority'

export const stepIndicatorVariant = cva(
  [
    'relative flex shrink-0 justify-center items-center',
    'rounded-full border-sm',
    'text-body-2 font-bold text-on-basic-container',
    'group-disabled/btn:opacity-dim-3 group-disabled/btn:bg-transparent',
  ],
  {
    variants: {
      size: {
        sm: [
          'w-sz-16 h-sz-16',
          'group-data-[orientation=horizontal]/list:mt-[-16px]',
          'group-data-[orientation=vertical]/list:ml-[-16px]',
        ],
        md: [
          'w-sz-24 h-sz-24',
          'group-data-[orientation=horizontal]/list:mt-[-24px]',
          'group-data-[orientation=vertical]/list:ml-[-24px]',
        ],
        lg: [
          'w-sz-32 h-sz-32',
          'group-data-[orientation=horizontal]/list:mt-[-32px]',
          'group-data-[orientation=vertical]/list:ml-[-32px]',
        ],
      },
      state: {
        complete: [
          'group-data-[interactive=true]/btn:group-hover/btn:bg-basic/dim-5',
          'group-data-[interactive=false]/btn:group-hover/btn:bg-transparent',
        ],
        incomplete: [
          'group-data-[interactive=true]/btn:group-hover/btn:bg-basic/dim-5',
          'group-data-[interactive=false]/btn:group-hover/btn:bg-transparent',
        ],
        active: 'bg-basic-container',
      },
    },
    defaultVariants: {
      size: 'lg',
      state: 'incomplete',
    },
  }
)
