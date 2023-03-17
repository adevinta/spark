const tw = <T>(a: T): T => a

export const outlinedVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-primary-container',
      'enabled:active:bg-primary-container',
      'focus-visible:bg-primary-container',
      'text-primary',
    ]),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-secondary-container',
      'enabled:active:bg-secondary-container',
      'focus-visible:bg-secondary-container',
      'text-secondary',
    ]),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-success-container',
      'enabled:active:bg-success-container',
      'focus-visible:bg-success-container',
      'text-success',
    ]),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-alert-container',
      'enabled:active:bg-alert-container',
      'focus-visible:bg-alert-container',
      'text-alert',
    ]),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-error-container',
      'enabled:active:bg-error-container',
      'focus-visible:bg-error-container',
      'text-error',
    ]),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-neutral-container',
      'enabled:active:bg-neutral-container',
      'focus-visible:bg-neutral-container',
      'text-neutral',
    ]),
  },
  // Surface
  {
    intent: 'surface' as const,
    design: 'outlined' as const,
    class: tw([
      'enabled:hover:bg-surface-container',
      'enabled:active:bg-surface-container',
      'focus-visible:bg-surface-container',
      'text-on-surface',
    ]),
  },
]
