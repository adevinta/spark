import { tw } from './default'

export const filledVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'filled' as const,
    class: tw([
      'bg-primary',
      'text-on-primary',
      'enabled:hover:bg-primary-hovered',
      'enabled:active:bg-primary-hovered',
      'focus-visible:bg-primary-focused',
    ]),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'filled' as const,
    class: tw([
      'bg-secondary',
      'text-on-secondary',
      'enabled:hover:bg-secondary-hovered',
      'enabled:active:bg-secondary-hovered',
      'focus-visible:bg-secondary-focused',
    ]),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'filled' as const,
    class: tw([
      'bg-success',
      'text-on-success',
      'enabled:hover:bg-success-hovered',
      'enabled:active:bg-success-hovered',
      'focus-visible:bg-success-focused',
    ]),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'filled' as const,
    class: tw([
      'bg-alert',
      'text-on-alert',
      'enabled:hover:bg-alert-hovered',
      'enabled:active:bg-alert-hovered',
      'focus-visible:bg-alert-focused',
    ]),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'filled' as const,
    class: tw([
      'bg-error',
      'text-on-error',
      'enabled:hover:bg-error-hovered',
      'enabled:active:bg-error-hovered',
      'focus-visible:bg-error-focused',
    ]),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'filled' as const,
    class: tw([
      'bg-neutral',
      'text-on-neutral',
      'enabled:hover:bg-neutral-hovered',
      'enabled:active:bg-neutral-hovered',
      'focus-visible:bg-neutral-focused',
    ]),
  },
  // Surface
  {
    intent: 'surface' as const,
    design: 'filled' as const,
    class: tw([
      'bg-surface',
      'text-on-surface',
      'enabled:hover:bg-surface-hovered',
      'enabled:active:bg-surface-hovered',
      'focus-visible:bg-surface-focused',
    ]),
  },
]
