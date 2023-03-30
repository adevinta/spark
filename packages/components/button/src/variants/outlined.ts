import { tw } from './default'

export const outlinedVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-primary-container-hovered',
      'enabled:active:bg-primary-container-hovered',
      'focus-visible:bg-primary-container-focused',
      'text-primary',
    ]),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-secondary-container-hovered',
      'enabled:active:bg-secondary-container-hovered',
      'focus-visible:bg-secondary-container-focused',
      'text-secondary',
    ]),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-success-container-hovered',
      'enabled:active:bg-success-container-hovered',
      'focus-visible:bg-success-container-focused',
      'text-success',
    ]),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-alert-container-hovered',
      'enabled:active:bg-alert-container-hovered',
      'focus-visible:bg-alert-container-focused',
      'text-alert',
    ]),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-error-container-hovered',
      'enabled:active:bg-error-container-hovered',
      'focus-visible:bg-error-container-focused',
      'text-error',
    ]),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-neutral-container-hovered',
      'enabled:active:bg-neutral-container-hovered',
      'focus-visible:bg-neutral-container-focused',
      'text-neutral',
    ]),
  },
  // Surface
  {
    intent: 'surface' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-surface-hovered',
      'enabled:active:bg-surface-hovered',
      'focus-visible:bg-surface-focused',
      'text-surface',
    ]),
  },
]
