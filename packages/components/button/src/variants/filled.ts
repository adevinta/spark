const tw = <T>(a: T): T => a

export const filledVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'filled' as const,
    reversed: false,
    class: tw([
      'bg-primary',
      'text-on-primary',
      'enabled:hover:bg-primary-hovered',
      'enabled:active:bg-primary-hovered',
      'focus-visible:bg-primary-focused',
    ]),
  },
  {
    intent: 'primary' as const,
    design: 'filled' as const,
    reversed: true,
    class: tw([
      'bg-surface',
      'text-primary',
      'enabled:hover:bg-primary-container-hovered',
      'enabled:active:bg-primary-container-hovered',
      'focus-visible:bg-primary-container-focused',
    ]),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'filled' as const,
    reversed: false,
    class: tw([
      'bg-secondary',
      'text-on-secondary',
      'enabled:hover:bg-secondary-hovered',
      'enabled:active:bg-secondary-hovered',
      'focus-visible:bg-secondary-focused',
    ]),
  },
  {
    intent: 'secondary' as const,
    design: 'filled' as const,
    reversed: true,
    class: tw([
      'bg-surface',
      'text-secondary',
      'enabled:hover:bg-secondary-container-hovered',
      'enabled:active:bg-secondary-container-hovered',
      'focus-visible:bg-secondary-container-focused',
    ]),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'filled' as const,
    reversed: false,
    class: tw([
      'bg-success',
      'text-on-success',
      'enabled:hover:bg-success-hovered',
      'enabled:active:bg-success-hovered',
      'focus-visible:bg-success-focused',
    ]),
  },
  {
    intent: 'success' as const,
    design: 'filled' as const,
    reversed: true,
    class: tw([
      'bg-surface',
      'text-success',
      'enabled:hover:bg-success-container-hovered',
      'enabled:active:bg-success-container-hovered',
      'focus-visible:bg-success-container-focused',
    ]),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'filled' as const,
    reversed: false,
    class: tw([
      'bg-alert',
      'text-on-alert',
      'enabled:hover:bg-alert-hovered',
      'enabled:active:bg-alert-hovered',
      'focus-visible:bg-alert-focused',
    ]),
  },
  {
    intent: 'alert' as const,
    design: 'filled' as const,
    reversed: true,
    class: tw([
      'bg-surface',
      'text-alert',
      'enabled:hover:bg-alert-container-hovered',
      'enabled:active:bg-alert-container-hovered',
      'focus-visible:bg-alert-container-focused',
    ]),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'filled' as const,
    reversed: false,
    class: tw([
      'bg-error',
      'text-on-error',
      'enabled:hover:bg-error-hovered',
      'enabled:active:bg-error-hovered',
      'focus-visible:bg-error-focused',
    ]),
  },
  {
    intent: 'danger' as const,
    design: 'filled' as const,
    reversed: true,
    class: tw([
      'bg-surface',
      'text-error',
      'enabled:hover:bg-error-container-hovered',
      'enabled:active:bg-error-container-hovered',
      'focus-visible:bg-error-container-focused',
    ]),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'filled' as const,
    reversed: false,
    class: tw([
      'bg-neutral',
      'text-on-neutral',
      'enabled:hover:bg-neutral-hovered',
      'enabled:active:bg-neutral-hovered',
      'focus-visible:bg-neutral-focused',
    ]),
  },
  {
    intent: 'neutral' as const,
    design: 'filled' as const,
    reversed: true,
    class: tw([
      'bg-surface',
      'text-neutral',
      'enabled:hover:bg-neutral-container-hovered',
      'enabled:active:bg-neutral-container-hovered',
      'focus-visible:bg-neutral-container-focused',
    ]),
  },
]
