import { tw } from '@spark-ui/internal-utils'

export const filledVariants = [
  // Main
  {
    intent: 'main',
    design: 'filled',
    class: tw([
      'bg-main',
      'text-on-main',
      'enabled:hover:bg-main-hovered',
      'enabled:active:bg-main-pressed',
      'focus-visible:bg-main-focused',
    ]),
  },
  // Support
  {
    intent: 'support',
    design: 'filled',
    class: tw([
      'bg-support',
      'text-on-support',
      'enabled:hover:bg-support-hovered',
      'enabled:active:bg-support-pressed',
      'focus-visible:bg-support-focused',
    ]),
  },
  // Basic
  {
    intent: 'basic',
    design: 'filled',
    class: tw([
      'bg-basic',
      'text-on-basic',
      'enabled:hover:bg-basic-hovered',
      'enabled:active:bg-basic-pressed',
      'focus-visible:bg-basic-focused',
    ]),
  },
  // Accent
  {
    intent: 'accent',
    design: 'filled',
    class: tw([
      'bg-accent',
      'text-on-accent',
      'enabled:hover:bg-accent-hovered',
      'enabled:active:bg-accent-pressed',
      'focus-visible:bg-accent-focused',
    ]),
  },
  // Success
  {
    intent: 'success',
    design: 'filled',
    class: tw([
      'bg-success',
      'text-on-success',
      'enabled:hover:bg-success-hovered',
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
      'enabled:hover:bg-alert-hovered',
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
      'enabled:hover:bg-error-hovered enabled:active:bg-error-pressed',
      'focus-visible:bg-error-focused',
    ]),
  },
  // Info
  {
    intent: 'info',
    design: 'filled',
    class: tw([
      'text-on-error bg-info',
      'enabled:hover:bg-info-hovered enabled:active:bg-info-pressed',
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
      'enabled:hover:bg-neutral-hovered',
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
      'enabled:hover:bg-surface-hovered',
      'enabled:active:bg-surface-pressed',
      'focus-visible:bg-surface-focused',
    ]),
  },
] as const
