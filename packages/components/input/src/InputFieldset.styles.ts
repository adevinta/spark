import { cva, type VariantProps } from 'class-variance-authority'

export const inputFieldsetStyles = cva([
  'absolute',
  'w-full',
  'h-full',
  'pointer-events-none',
  'rounded-lg',
  'border-sm',
  'border-outline',
  'hover:border-outline-high',
  'left-none',
  'top-none',
  'px-lg',
  'block',
])

export const inputFieldsetLegendStyles = cva(
  [
    'text-body-2',
    'transition-all',
    'duration-100',
    'text-transparent',
    'h-none',
    'overflow-hidden',
    'py-none',
    'px-md',
  ],
  {
    variants: {
      isExpanded: {
        true: ['block'],
        false: ['hidden'],
      },
    },
  }
)

export const inputFieldsetLegendMandatoryStyles = cva(['text-caption'])

export type InputFieldsetStylesProps = VariantProps<typeof inputFieldsetStyles>
