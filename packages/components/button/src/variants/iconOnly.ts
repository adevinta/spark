import { tw } from '@spark-ui/internal-utils'

export const iconOnlyVariants = [
  {
    iconOnly: true,
    size: 'sm',
    class: tw(['text-body-1']),
  },
  {
    iconOnly: true,
    size: 'md',
    class: tw(['text-body-1']),
  },
  {
    iconOnly: true,
    size: 'lg',
    class: tw(['text-display-3']),
  },
] as const
