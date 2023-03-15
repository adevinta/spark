const tw = <T>(a: T): T => a

export const tintedVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'tinted' as const,
    class: tw([
      'bg-primary-container',
      'text-on-primary-container',
      'enabled:hover:bg-primary-container-hovered',
      'enabled:active:bg-primary-container-hovered',
      'focus-visible:bg-primary-container-focused',
    ]),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'tinted' as const,
    class: tw([
      'bg-secondary-container',
      'text-on-secondary-container',
      'enabled:hover:bg-secondary-container-hovered',
      'enabled:active:bg-secondary-container-hovered',
      'focus-visible:bg-secondary-container-focused',
    ]),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'tinted' as const,
    class: tw([
      'bg-success-container',
      'text-on-success-container',
      'enabled:hover:bg-success-container-hovered',
      'enabled:active:bg-success-container-hovered',
      'focus-visible:bg-success-container-focused',
    ]),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'tinted' as const,
    class: tw([
      'bg-alert-container',
      'text-on-alert-container',
      'enabled:hover:bg-alert-container-hovered',
      'enabled:active:bg-alert-container-hovered',
      'focus-visible:bg-alert-container-focused',
    ]),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'tinted' as const,
    class: tw([
      'bg-error-container',
      'text-on-error-container',
      'enabled:hover:bg-error-container-hovered',
      'enabled:active:bg-error-container-hovered',
      'focus-visible:bg-error-container-focused',
    ]),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'tinted' as const,
    class: tw([
      'bg-neutral-container',
      'text-on-neutral-container',
      'enabled:hover:bg-neutral-container-hovered',
      'enabled:active:bg-neutral-container-hovered',
      'focus-visible:bg-neutral-container-focused',
    ]),
  },
]
