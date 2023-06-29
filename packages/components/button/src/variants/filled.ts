import { tw } from '@spark-ui/internal-utils'

export const filledVariants = [
  // Primary
  {
    intent: 'primary',
    design: 'filled',
    class: tw([
      'bg-primary',
      'text-on-primary',
      'hover:bg-primary-hovered',
      'enabled:active:bg-primary-pressed',
      'focus-visible:bg-primary-focused',
    ]),
  },
  // Secondary
  {
    intent: 'secondary',
    design: 'filled',
    class: tw([
      'bg-secondary',
      'text-on-secondary',
      'hover:bg-secondary-hovered',
      'enabled:active:bg-secondary-pressed',
      'focus-visible:bg-secondary-focused',
    ]),
  },
  // Success
  {
    intent: 'success',
    design: 'filled',
    class: tw([
      'bg-success',
      'text-on-success',
      'hover:bg-success-hovered',
      'enabled:active:bg-success-pressed',
      'focus-visible:bg-success-focused',
    ]),
  },
  // Alert
  {
    intent: 'alert',
    design: 'filled',
    class: tw([
      'bg-alert',
      'text-on-alert',
      'hover:bg-alert-hovered',
      'enabled:active:bg-alert-pressed',
      'focus-visible:bg-alert-focused',
    ]),
  },
  // Danger
  {
    intent: 'danger',
    design: 'filled',
    class: tw([
      'text-on-error bg-error',
      'hover:bg-error-hovered enabled:active:bg-error-pressed',
      'focus-visible:bg-error-focused',
    ]),
  },
  // Info
  {
    intent: 'info',
    design: 'filled',
    class: tw([
      'text-on-error bg-info',
      'hover:bg-info-hovered enabled:active:bg-info-pressed',
      'focus-visible:bg-info-focused',
    ]),
  },
  // Neutral
  {
    intent: 'neutral',
    design: 'filled',
    class: tw([
      'bg-neutral',
      'text-on-neutral',
      'hover:bg-neutral-hovered',
      'enabled:active:bg-neutral-pressed',
      'focus-visible:bg-neutral-focused',
    ]),
  },
  // Surface
  {
    intent: 'surface',
    design: 'filled',
    class: tw([
      'bg-surface',
      'text-on-surface',
      'hover:bg-surface-hovered',
      'enabled:active:bg-surface-pressed',
      'focus-visible:bg-surface-focused',
    ]),
  },
] as const
