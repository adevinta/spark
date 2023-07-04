import { cva, VariantProps } from 'class-variance-authority'

export const textFieldFloatingLabelStyles = cva(
  [
    'absolute',
    'transition-all',
    'duration-200',
    'cursor-auto',
    'peer-disabled:text-on-surface/dim-3',
    'peer-read-only:text-on-surface/dim-3',
  ],
  {
    variants: {
      isExpanded: {
        true: ['left-lg', '-top-md', 'text-body-2', 'px-sm'],
        false: ['left-none', 'top-1/2', 'left-none', 'transform', '-translate-y-1/2', 'px-lg'],
      },
      isLeftElementVisible: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [{ isExpanded: false, isLeftElementVisible: true, className: ['pl-3xl'] }],
  }
)

export type TextFieldFloatingLabelStylesProps = VariantProps<typeof textFieldFloatingLabelStyles>
