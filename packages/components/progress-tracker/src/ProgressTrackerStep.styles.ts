import { cva } from 'class-variance-authority'

export const stepItemVariant = cva(
  [
    'relative inline-flex items-start flex-auto first:grow-0 justify-center group/item',
    // Progress Track
    'after:absolute after:z-base',
    'after:bg-basic',
    'last:after:content-none',
    // Horizontal orientation
    'group-data-[orientation=horizontal]/list:px-[1px]',
    'group-data-[orientation=horizontal]/list:before:absolute group-data-[orientation=horizontal]/list:before:z-base',
    'group-data-[orientation=horizontal]/list:before:bg-basic',
    'group-data-[orientation=horizontal]/list:before:left-none group-data-[orientation=horizontal]/list:after:right-none',
    'group-data-[orientation=horizontal]/list:before:h-[1px] group-data-[orientation=horizontal]/list:after:h-[1px]',
    'group-data-[orientation=horizontal]/list:first:before:content-none',
    // Vertical orientation
    'group-data-[orientation=vertical]/list:py-[1px]',
    'group-data-[orientation=vertical]/list:items-start',
    'group-data-[orientation=vertical]/list:after:w-[1px] group-data-[orientation=vertical]/list:after:bottom-[-1px]',
  ],
  {
    variants: {
      size: {
        sm: [
          // Horizontal orientation
          'group-data-[orientation=horizontal]/list:before:top-[8px] group-data-[orientation=horizontal]/list:after:top-[8px]',
          'group-data-[orientation=horizontal]/list:before:right-[calc(50%+12px)] group-data-[orientation=horizontal]/list:after:left-[calc(50%+12px)]',
          'group-data-[orientation=horizontal]/list:first:after:left-[calc(50%+10px)]',
          'group-data-[orientation=horizontal]/list:last:before:right-[calc(50%+10px)]',
          // Vertical orientation
          'group-data-[orientation=vertical]/list:after:left-[8px]',
          'group-data-[orientation=vertical]/list:after:top-[25px]',
          'group-data-[orientation=vertical]/list:first:after:top-[21px]',
        ],
        md: [
          // Horizontal orientation
          'group-data-[orientation=horizontal]/list:before:top-[12px] group-data-[orientation=horizontal]/list:after:top-[12px]',
          'group-data-[orientation=horizontal]/list:before:right-[calc(50%+16px)] group-data-[orientation=horizontal]/list:after:left-[calc(50%+16px)]',
          'group-data-[orientation=horizontal]/list:first:after:left-[calc(50%+14px)]',
          'group-data-[orientation=horizontal]/list:last:before:right-[calc(50%+14px)]',
          // Vertical orientation
          'group-data-[orientation=vertical]/list:after:left-[12px]',
          'group-data-[orientation=vertical]/list:after:top-[33px]',
          'group-data-[orientation=vertical]/list:first:after:top-[29px]',
        ],
        lg: [
          // Horizontal orientation
          'group-data-[orientation=horizontal]/list:before:top-[16px] group-data-[orientation=horizontal]/list:after:top-[16px]',
          'group-data-[orientation=horizontal]/list:before:right-[calc(50%+20px)] group-data-[orientation=horizontal]/list:after:left-[calc(50%+20px)]',
          'group-data-[orientation=horizontal]/list:first:after:left-[calc(50%+18px)]',
          'group-data-[orientation=horizontal]/list:last:before:right-[calc(50%+18px)]',
          // Vertical orientation
          'group-data-[orientation=vertical]/list:after:left-[16px]',
          'group-data-[orientation=vertical]/list:after:top-[41px]',
          'group-data-[orientation=vertical]/list:first:after:top-[37px]',
        ],
      },
      disabled: {
        true: 'before:opacity-dim-3',
        false: '',
      },
      disabledAfter: {
        true: 'after:opacity-dim-3',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
      disabledAfter: false,
      size: 'lg',
    },
  }
)

export const stepButtonVariant = cva(
  [
    'relative flex group/btn',
    // Horizontal orientation
    'group-data-[orientation=horizontal]/list:flex-col group-data-[orientation=horizontal]/list:items-center',
    'group-data-[orientation=horizontal]/list:text-center group-data-[orientation=horizontal]/list:mx-sm',
    'group-data-[orientation=horizontal]/list:group-first/item:ml-none group-data-[orientation=horizontal]/list:group-last/item:mr-none',
    // Vertical orientation
    'group-data-[orientation=vertical]/list:flex-row group-data-[orientation=vertical]/list:items-start',
    'group-data-[orientation=vertical]/list:text-left group-data-[orientation=vertical]/list:my-sm',
    'group-data-[orientation=vertical]/list:group-first/item:mt-none group-data-[orientation=vertical]/list:group-last/item:mb-none',
  ],
  {
    variants: {
      size: {
        sm: [
          'group-data-[orientation=horizontal]/list:min-w-sz-16 group-data-[orientation=horizontal]/list:mt-[16px]',
          'group-data-[orientation=vertical]/list:min-h-sz-16 group-data-[orientation=vertical]/list:ml-[16px]',
        ],
        md: [
          'group-data-[orientation=horizontal]/list:min-w-sz-24 group-data-[orientation=horizontal]/list:mt-[24px]',
          'group-data-[orientation=vertical]/list:min-h-sz-24 group-data-[orientation=vertical]/list:ml-[24px]',
        ],
        lg: [
          'group-data-[orientation=horizontal]/list:min-w-sz-32 group-data-[orientation=horizontal]/list:mt-[32px]',
          'group-data-[orientation=vertical]/list:min-h-sz-32 group-data-[orientation=vertical]/list:ml-[32px]',
        ],
      },
      readOnly: {
        true: 'cursor-default',
        false: '',
      },
    },
    defaultVariants: {
      size: 'lg',
      readOnly: false,
    },
  }
)
