import { tw } from './default'

export const outlinedVariants = [
  {
    intent: 'primary',
    design: 'outlined',
    class: tw(['text-primary']),
  },
  {
    intent: 'secondary',
    design: 'outlined',
    class: tw(['text-secondary']),
  },
  {
    intent: 'success',
    design: 'outlined',
    class: tw(['text-success']),
  },
  {
    intent: 'alert',
    design: 'outlined',
    class: tw(['text-alert']),
  },
  {
    intent: 'danger',
    design: 'outlined',
    class: tw(['text-error']),
  },
  {
    intent: 'info',
    design: 'outlined',
    class: tw(['text-info']),
  },
  {
    intent: 'neutral',
    design: 'outlined',
    class: tw(['text-neutral']),
  },
] as const
