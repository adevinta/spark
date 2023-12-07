import { cva, type VariantProps } from 'class-variance-authority'

export const stepItemVariant = cva(
  [
    'relative inline-flex flex-auto first:grow-0 justify-center group',
    // Progress Track
    'after:absolute after:z-base',
    'after:bg-basic',
    'last:after:content-none',
  ],
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      disabled: {
        true: 'before:opacity-dim-3',
        false: '',
      },
      disabledAfter: {
        true: 'after:opacity-dim-3',
        false: '',
      },
      orientation: {
        vertical: ['after:w-[1px]', 'after:bottom-[-1px]'],
        horizontal: [
          'before:h-[1px] after:h-[1px]',
          'before:bg-basic before:absolute before:z-base',
          'before:left-none after:right-none',
          'first:before:content-none',
        ],
      },
    },
    compoundVariants: [
      // Horizontal sizes variants
      {
        size: 'sm',
        orientation: 'horizontal',
        class: [
          'before:top-[8px] after:top-[8px]',
          'before:right-[calc(50%+12px)] after:left-[calc(50%+12px)]',
          'first:after:left-[calc(50%-(theme("spacing.sm")/2)+11px)] last:before:right-[calc(50%-(theme("spacing.sm")/2)+11px)]',
        ],
      },
      {
        size: 'md',
        orientation: 'horizontal',
        class: [
          'before:top-[12px] after:top-[12px]',
          'before:right-[calc(50%+16px)] after:left-[calc(50%+16px)]',
          'first:after:left-[calc(50%-(theme("spacing.sm")/2)+15px)] last:before:right-[calc(50%-(theme("spacing.sm")/2)+15px)]',
        ],
      },
      {
        size: 'lg',
        orientation: 'horizontal',
        class: [
          'before:top-[16px] after:top-[16px]',
          'before:right-[calc(50%+20px)] after:left-[calc(50%+20px)]',
          'first:after:left-[calc(50%-(theme("spacing.sm")/2)+19px)] last:before:right-[calc(50%-(theme("spacing.sm")/2)+19px)]',
        ],
      },
      // Vertical sizes variants
      {
        size: 'sm',
        orientation: 'vertical',
        class: ['after:left-[8px]', 'after:top-[24px]', 'first:after:top-[20px]'],
      },
      {
        size: 'md',
        orientation: 'vertical',
        class: ['after:left-[12px]', 'after:top-[32px]', 'first:after:top-[28px]'],
      },
      {
        size: 'lg',
        orientation: 'vertical',
        class: ['after:left-[16px]', 'after:top-[40px]', 'first:after:top-[36px]'],
      },
    ],
    defaultVariants: {
      disabled: false,
      disabledAfter: false,
      size: 'lg',
      orientation: 'horizontal',
    },
  }
)

export const stepButtonVariant = cva(
  [
    'flex',
    // Progress Indicator
    'before:absolute',
    'before:[counter-increment:step] before:content-[counter(step)]',
    'before:flex before:shrink-0 before:items-center before:justify-center before:rounded-full before:mx-auto',
    'before:border-sm before:text-on-basic-container',
    'before:text-body-2 before:font-bold',
  ],
  {
    variants: {
      size: {
        sm: ['min-h-sz-16', 'before:w-sz-16 before:h-sz-16', 'before:!content-["_"]'],
        md: ['min-h-sz-24', 'before:w-sz-24 before:h-sz-24'],
        lg: ['min-h-sz-32', 'before:w-sz-32 before:h-sz-32'],
      },
      complete: {
        true: [
          'before:content-[url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjQgMjQnIGhlaWdodD0nMTYnIHdpZHRoPScxNicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSdjdXJyZW50Q29sb3InIHN0cm9rZT0nbm9uZSc+PHBhdGggZD0nbTguOTIsMTkuMDhjLS4xOCwwLS4zNi0uMDMtLjUzLS4xcy0uMzMtLjE3LS40Ny0uMzFsLTUuNDktNS4zNGMtLjI4LS4yOC0uNDItLjYxLS40Mi0xcy4xNC0uNzMuNDItMWMuMjgtLjI4LjYyLS40MSwxLjAyLS40MXMuNzQuMTQsMS4wNS40MWw0LjQzLDQuMywxMC42Mi0xMC4yOWMuMjgtLjI4LjYyLS40MiwxLjAyLS40My4zOSwwLC43My4xMywxLjAyLjQzLjI4LjI4LjQyLjYxLjQyLDFzLS4xNC43My0uNDIsMWwtMTEuNjUsMTEuMzJjLS4xNC4xNC0uMy4yNC0uNDcuMzEtLjE3LjA3LS4zNS4xLS41My4xWic+PC9wYXRoPjwvc3ZnPg==)]',
          'before:inline-flex before:leading-none',
        ],
        false: '',
      },
      active: {
        true: ['before:bg-basic-container', 'cursor-default'],
        false: '',
      },
      disabled: {
        true: 'before:opacity-dim-3',
        false: '',
      },
      readOnly: {
        true: ['cursor-default'],
        false: '',
      },
      orientation: {
        vertical: [
          'before:left-none',
          'flex-row text-left',
          'my-sm mr-auto group-first:mt-none group-last:mb-none',
          'py-[1px] group-first:pt-none group-last:pb-none',
        ],
        horizontal: [
          'before:top-none',
          'flex-col items-center text-center',
          'mx-sm mb-auto group-first:ml-none group-last:mr-none',
          'px-[1px] group-first:pl-none group-last:pr-none',
        ],
      },
    },
    compoundVariants: [
      {
        readOnly: false,
        disabled: false,
        active: false,
        complete: [true, false],
        class: 'hover:before:bg-basic/dim-5',
      },
      {
        size: 'sm',
        orientation: 'horizontal',
        class: 'mt-[calc(16px+theme("spacing.md"))]',
      },
      {
        size: 'md',
        orientation: 'horizontal',
        class: 'mt-[calc(24px+theme("spacing.md"))]',
      },
      {
        size: 'lg',
        orientation: 'horizontal',
        class: 'mt-[calc(32px+theme("spacing.md"))]',
      },
      // Vertical
      {
        size: 'sm',
        orientation: 'vertical',
        class: 'ml-[calc(16px+theme("spacing.md"))]',
      },
      {
        size: 'md',
        orientation: 'vertical',
        class: 'ml-[calc(24px+theme("spacing.md"))]',
      },
      {
        size: 'lg',
        orientation: 'vertical',
        class: 'ml-[calc(32px+theme("spacing.md"))]',
      },
    ],
    defaultVariants: {
      readOnly: false,
      disabled: false,
      active: false,
      complete: false,
      size: 'lg',
      orientation: 'horizontal',
    },
  }
)

export type ProgressTrackerStepVariantsProps = VariantProps<typeof stepButtonVariant>
