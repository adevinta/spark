const tw = <T>(a: T): T => a

export const ghostVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'ghost' as const,
    reversed: false,
    class: tw(['text-primary']),
  },
  {
    intent: 'primary' as const,
    design: 'ghost' as const,
    reversed: true,
    class: tw([
      'text-on-surface-inverse',
      'enabled:hover:bg-primary',
      'enabled:active:bg-primary',
      'focus-visible:bg-primary',
    ]),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'ghost' as const,
    reversed: false,
    class: tw(['text-secondary']),
  },
  {
    intent: 'secondary' as const,
    design: 'ghost' as const,
    reversed: true,
    class: tw([
      'text-on-surface-inverse',
      'enabled:hover:bg-secondary',
      'enabled:active:bg-secondary',
      'focus-visible:bg-secondary',
    ]),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'ghost' as const,
    reversed: false,
    class: tw(['text-success']),
  },
  {
    intent: 'success' as const,
    design: 'ghost' as const,
    reversed: true,
    class: tw([
      'text-on-surface-inverse',
      'enabled:hover:bg-success',
      'enabled:active:bg-success',
      'focus-visible:bg-success',
    ]),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'ghost' as const,
    reversed: false,
    class: tw(['text-alert']),
  },
  {
    intent: 'alert' as const,
    design: 'ghost' as const,
    reversed: true,
    class: tw([
      'text-on-surface-inverse',
      'enabled:hover:bg-alert',
      'enabled:active:bg-alert',
      'focus-visible:bg-alert',
    ]),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'ghost' as const,
    reversed: false,
    class: tw(['text-error']),
  },
  {
    intent: 'danger' as const,
    design: 'ghost' as const,
    reversed: true,
    class: tw([
      'text-on-surface-inverse',
      'enabled:hover:bg-error',
      'enabled:active:bg-error',
      'focus-visible:bg-error',
    ]),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'ghost' as const,
    reversed: false,
    class: tw(['text-neutral']),
  },
  {
    intent: 'neutral' as const,
    design: 'ghost' as const,
    reversed: true,
    class: tw([
      'text-on-surface-inverse',
      'enabled:hover:bg-neutral',
      'enabled:active:bg-neutral',
      'focus-visible:bg-neutral',
    ]),
  },
]
