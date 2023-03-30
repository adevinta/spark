import { tw } from '@spark-ui/internal-utils'

export const contrastVariants = [
  // Primary
  {
    intent: 'primary' as const,
    design: 'contrast' as const,
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
    design: 'contrast' as const,
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
    design: 'contrast' as const,
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
    design: 'contrast' as const,
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
    design: 'contrast' as const,
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
    design: 'contrast' as const,
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
    design: 'contrast' as const,
    class: tw([
      'text-surface',
      'enabled:hover:bg-surface-hovered',
      'enabled:active:bg-surface-hovered',
      'focus-visible:bg-surface-focused',
    ]),
  },
]
