const tw = <T>(a: T): T => a

export const ghostVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'ghost' as const,
    class: tw(['text-primary']),
  },
  // Secondary
  {
    intent: 'secondary' as const,
    design: 'ghost' as const,
    class: tw(['text-secondary']),
  },
  // Success
  {
    intent: 'success' as const,
    design: 'ghost' as const,
    class: tw(['text-success']),
  },
  // Alert
  {
    intent: 'alert' as const,
    design: 'ghost' as const,
    class: tw(['text-alert']),
  },
  // Danger
  {
    intent: 'danger' as const,
    design: 'ghost' as const,
    class: tw(['text-error']),
  },
  // Neutral
  {
    intent: 'neutral' as const,
    design: 'ghost' as const,
    class: tw(['text-neutral']),
  },
  // Surface
  {
    intent: 'surface' as const,
    design: 'ghost' as const,
    class: tw(['text-on-surface']),
  },
]
