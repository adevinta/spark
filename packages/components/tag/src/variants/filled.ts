import { tw } from './default'

export const filledVariants = [
  {
    intent: 'primary',
    design: 'filled',
    class: tw(['bg-primary', 'text-on-primary']),
  },
  {
    intent: 'secondary',
    design: 'filled',
    class: tw(['bg-secondary', 'text-on-secondary']),
  },
  {
    intent: 'success',
    design: 'filled',
    class: tw(['bg-success', 'text-on-success']),
  },
  {
    intent: 'alert',
    design: 'filled',
    class: tw(['bg-alert', 'text-on-alert']),
  },
  {
    intent: 'danger',
    design: 'filled',
    class: tw(['bg-error', 'text-on-error']),
  },
  {
    intent: 'info',
    design: 'filled',
    class: tw(['bg-info', 'text-on-info']),
  },
  {
    intent: 'neutral',
    design: 'filled',
    class: tw(['bg-neutral', 'text-on-neutral']),
  },
] as const
