import { tw } from './default'

export const filledVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'filled' as const,
    class: tw(['bg-primary', 'text-on-primary']),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'filled' as const,
    class: tw(['bg-secondary', 'text-on-secondary']),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'filled' as const,
    class: tw(['bg-success', 'text-on-success']),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'filled' as const,
    class: tw(['bg-alert', 'text-on-alert']),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'filled' as const,
    class: tw(['bg-error', 'text-on-error']),
  },
  // Info
  {
    intent: 'info' as const,
    design: 'filled' as const,
    class: tw(['bg-info', 'text-on-info']),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'filled' as const,
    class: tw(['bg-neutral', 'text-on-neutral']),
  },
]
