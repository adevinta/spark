import { cva, type VariantProps } from 'class-variance-authority'

export const stepItemVariant = cva(
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

// eslint-disable-next-line tailwindcss/no-custom-classname
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
  ],
  {
    variants: {
      size: {
        sm: ['before:w-sz-16 before:h-sz-16', 'before:!content-["_"]'],
        md: 'before:w-sz-24 before:h-sz-24',
        lg: 'before:w-sz-32 before:h-sz-32',
      },
      complete: {
        true: [
          'before:content-[url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjQgMjQnIGhlaWdodD0nMTYnIHdpZHRoPScxNicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSdjdXJyZW50Q29sb3InIHN0cm9rZT0nbm9uZSc+PHBhdGggZD0nbTguOTIsMTkuMDhjLS4xOCwwLS4zNi0uMDMtLjUzLS4xcy0uMzMtLjE3LS40Ny0uMzFsLTUuNDktNS4zNGMtLjI4LS4yOC0uNDItLjYxLS40Mi0xcy4xNC0uNzMuNDItMWMuMjgtLjI4LjYyLS40MSwxLjAyLS40MXMuNzQuMTQsMS4wNS40MWw0LjQzLDQuMywxMC42Mi0xMC4yOWMuMjgtLjI4LjYyLS40MiwxLjAyLS40My4zOSwwLC43My4xMywxLjAyLjQzLjI4LjI4LjQyLjYxLjQyLDFzLS4xNC43My0uNDIsMWwtMTEuNjUsMTEuMzJjLS4xNC4xNC0uMy4yNC0uNDcuMzEtLjE3LjA3LS4zNS4xLS41My4xWic+PC9wYXRoPjwvc3ZnPg==)]',
          'before:inline-flex before:leading-none',
          'hover:before:bg-basic/dim-5',
        ],
        false: '',
      },
      active: {
        true: ['before:bg-basic-container', 'hover:before:bg-basic/dim-5'],
        false: '',
      },
      disabled: {
        true: 'opacity-dim-3',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
      active: false,
      complete: false,
      size: 'lg',
    },
  }
)

export type ProgressTrackerStepVariantsProps = VariantProps<typeof stepButtonVariant>
