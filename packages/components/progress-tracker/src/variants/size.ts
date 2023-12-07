export const sizeItemVariants = [
  {
    size: 'sm',
    orientation: ['horizontal', 'vertical'],
    class: [
      'before:top-[8px] after:top-[8px]',
      'before:right-[calc(50%+12px)] after:left-[calc(50%+12px)]',
    ],
  },
  {
    size: 'md',
    orientation: ['horizontal', 'vertical'],
    class: [
      'before:top-[12px] after:top-[12px]',
      'before:right-[calc(50%+16px)] after:left-[calc(50%+16px)]',
    ],
  },
  {
    size: 'lg',
    orientation: ['horizontal', 'vertical'],
    class: [
      'before:top-[16px] after:top-[16px]',
      'before:right-[calc(50%+20px)] after:left-[calc(50%+20px)]',
    ],
  },
] as const

export const sizeButtonVariants = {
  size: {
    sm: ['before:w-sz-16 before:h-sz-16', 'before:!content-["_"]'],
    md: 'before:w-sz-24 before:h-sz-24',
    lg: 'before:w-sz-32 before:h-sz-32',
  },
}
