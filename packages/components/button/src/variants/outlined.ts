const tw = <T>(a: T): T => a

export const outlinedVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'outlined' as const,
    reversed: false,
    class: tw([
      'enabled:hover:bg-primary-container',
      'enabled:active:bg-primary-container',
      'focus-visible:bg-primary-container',
      'text-primary',
    ]),
  },
  {
    intent: 'primary' as const,
    design: 'outlined' as const,
    reversed: true,
    class: tw([
      'enabled:hover:bg-primary',
      'enabled:active:bg-primary',
      'focus-visible:bg-primary',
      'text-on-surface-inverse',
    ]),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'outlined' as const,
    reversed: false,
    class: tw([
      'enabled:hover:bg-secondary-container',
      'enabled:active:bg-secondary-container',
      'focus-visible:bg-secondary-container',
      'text-secondary',
    ]),
  },
  {
    intent: 'secondary' as const,
    design: 'outlined' as const,
    reversed: true,
    class: tw([
      'enabled:hover:bg-secondary',
      'enabled:active:bg-secondary',
      'focus-visible:bg-secondary',
      'text-on-surface-inverse',
    ]),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'outlined' as const,
    reversed: false,
    class: tw([
      'enabled:hover:bg-success-container',
      'enabled:active:bg-success-container',
      'focus-visible:bg-success-container',
      'text-success',
    ]),
  },
  {
    intent: 'success' as const,
    design: 'outlined' as const,
    reversed: true,
    class: tw([
      'enabled:hover:bg-success',
      'enabled:active:bg-success',
      'focus-visible:bg-success',
      'text-on-surface-inverse',
    ]),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'outlined' as const,
    reversed: false,
    class: tw([
      'enabled:hover:bg-alert-container',
      'enabled:active:bg-alert-container',
      'focus-visible:bg-alert-container',
      'text-alert',
    ]),
  },
  {
    intent: 'alert' as const,
    design: 'outlined' as const,
    reversed: true,
    class: tw([
      'enabled:hover:bg-alert',
      'enabled:active:bg-alert',
      'focus-visible:bg-alert',
      'text-on-surface-inverse',
    ]),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'outlined' as const,
    reversed: false,
    class: tw([
      'enabled:hover:bg-error-container',
      'enabled:active:bg-error-container',
      'focus-visible:bg-error-container',
      'text-error',
    ]),
  },
  {
    intent: 'danger' as const,
    design: 'outlined' as const,
    reversed: true,
    class: tw([
      'enabled:hover:bg-error',
      'enabled:active:bg-error',
      'focus-visible:bg-error',
      'text-on-surface-inverse',
    ]),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'outlined' as const,
    reversed: false,
    class: tw([
      'enabled:hover:bg-neutral-container',
      'enabled:active:bg-neutral-container',
      'focus-visible:bg-neutral-container',
      'text-neutral',
    ]),
  },
  {
    intent: 'neutral' as const,
    design: 'outlined' as const,
    reversed: true,
    class: tw([
      'enabled:hover:bg-neutral',
      'enabled:active:bg-neutral',
      'focus-visible:bg-neutral',
      'text-on-surface-inverse',
    ]),
  },
]
