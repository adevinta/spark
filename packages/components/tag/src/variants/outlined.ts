import { tw } from './default'

export const outlinedVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'outlined' as const,
    class: tw(['text-primary']),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'outlined' as const,
    class: tw(['text-secondary']),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'outlined' as const,
    class: tw(['text-success']),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'outlined' as const,
    class: tw(['text-alert']),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'outlined' as const,
    class: tw(['text-error']),
  },
  // Info
  {
    intent: 'info' as const,
    design: 'outlined' as const,
    class: tw(['text-info']),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'outlined' as const,
    class: tw(['text-neutral']),
  },
]
