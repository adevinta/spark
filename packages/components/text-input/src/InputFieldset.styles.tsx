import { cva, type VariantProps } from 'class-variance-authority'

export const inputFieldsetStyles = cva([
  'gap-sm',
  'flex',
  'flex-row',
  'items-center',
  'absolute',
  'w-full',
  'h-full',
])

export const inputFieldsetLegendStyles = cva(
  [
    'absolute',
    'text-body-2',
    'transition-all',
    'top-[-.75em]',
    'left-[-4px]',
    'pl-[4px]',
    'pr-[4px]',
    'text-transparent',
  ],
  {
    variants: {
      isExpanded: {
        true: ['bg-transparent'],
        false: ['bg-surface'],
      },
    },
  }
)

export const inputFieldsetLegendMandatoryStyles = cva(['text-caption'])

export type InputFieldsetStylesProps = VariantProps<typeof inputFieldsetStyles>
