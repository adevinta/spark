import { cva } from 'class-variance-authority'

export const stepIndicatorVariant = cva(
  [
    'absolute z-base',
    'flex shrink-0 justify-center items-center',
    'rounded-full border-sm',
    'text-body-2 font-bold text-on-basic-container',
    'group-disabled/btn:opacity-dim-3 group-disabled/btn:bg-transparent',
    // Horizontal orientation
    'group-data-[orientation=horizontal]/list:bottom-full group-data-[orientation=horizontal]/list:left-[50%] group-data-[orientation=horizontal]/list:translate-x-[-50%]',
    // Vertical orientation
    'group-data-[orientation=vertical]/list:right-full group-data-[orientation=vertical]/list:top-none',
  ],
  {
    variants: {
      size: {
        sm: ['w-sz-16 h-sz-16'],
        md: ['w-sz-24 h-sz-24'],
        lg: ['w-sz-32 h-sz-32'],
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
