import { tw } from './default'

export const tintedVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'tinted' as const,
    class: tw(['bg-primary-container', 'text-on-primary-container']),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'tinted' as const,
    class: tw(['bg-secondary-container', 'text-on-secondary-container']),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'tinted' as const,
    class: tw(['bg-success-container', 'text-on-success-container']),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'tinted' as const,
    class: tw(['bg-alert-container', 'text-on-alert-container']),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'tinted' as const,
    class: tw(['bg-error-container', 'text-on-error-container']),
  },
  // Info
  {
    intent: 'info' as const,
    design: 'tinted' as const,
    class: tw(['bg-info-container', 'text-on-info-container']),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'tinted' as const,
    class: tw(['bg-neutral-container', 'text-on-neutral-container']),
  },
]
