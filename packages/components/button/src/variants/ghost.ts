import { tw } from './default'

export const ghostVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'ghost' as const,
    class: tw([
      'text-primary',
      'enabled:hover:bg-primary-container-hovered',
      'enabled:active:bg-primary-container-hovered',
      'focus-visible:bg-primary-container-focused',
    ]),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'ghost' as const,
    class: tw([
      'text-secondary',
      'enabled:hover:bg-secondary-container-hovered',
      'enabled:active:bg-secondary-container-hovered',
      'focus-visible:bg-secondary-container-focused',
    ]),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'ghost' as const,
    class: tw([
      'text-success',
      'enabled:hover:bg-success-container-hovered',
      'enabled:active:bg-success-container-hovered',
      'focus-visible:bg-success-container-focused',
    ]),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'ghost' as const,
    class: tw([
      'text-alert',
      'enabled:hover:bg-alert-container-hovered',
      'enabled:active:bg-alert-container-hovered',
      'focus-visible:bg-alert-container-focused',
    ]),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'ghost' as const,
    class: tw([
      'text-error',
      'enabled:hover:bg-error-container-hovered',
      'enabled:active:bg-error-container-hovered',
      'focus-visible:bg-error-container-focused',
    ]),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'ghost' as const,
    class: tw([
      'text-neutral',
      'enabled:hover:bg-neutral-container-hovered',
      'enabled:active:bg-neutral-container-hovered',
      'focus-visible:bg-neutral-container-focused',
    ]),
  },
  // Surface
  {
    intent: 'surface' as const,
    design: 'ghost' as const,
    class: tw([
      'text-on-surface',
      'enabled:hover:bg-surface-container-hovered',
      'enabled:active:bg-surface-container-hovered',
      'focus-visible:bg-surface-container-focused',
    ]),
  },
]
