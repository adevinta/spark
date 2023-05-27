import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  ['h-sz-44', 'rounded-lg', 'border-sm', 'outline-none', 'text-ellipsis', 'focus:ring-1'],
  {
    variants: {
      intent: {
        neutral: ['hover:border-outline-high', 'focus:border-outline-high', 'ring-outline-high'],
        success: ['border-success', 'ring-success'],
        alert: ['border-alert', 'ring-alert'],
        error: ['border-error', 'ring-error'],
      },
      isLeftAddonVisible: {
        true: ['border-l-none', 'pl-md', '!rounded-l-none', '!ring-0'],
        false: ['pl-lg'],
      },
      isRightAddonVisible: {
        true: ['border-r-none', 'pr-md', '!rounded-r-none', '!ring-0'],
        false: ['pr-lg'],
      },
      isHovered: {
        true: ['border-outline-high'],
        false: ['border-outline'],
      },
    },
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
