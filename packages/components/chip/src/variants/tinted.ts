import { tw } from '@spark-ui/internal-utils'

export const tintedVariants = [
  /** Intents **/
  {
    design: 'tinted',
    intent: 'main',
    class: tw([
      'bg-main-container',
      'text-on-main-container',
      'enabled:hover:bg-main-container-hovered',
      'enabled:active:bg-main-container-pressed',
      'focus-visible:bg-main-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'support',
    class: tw([
      'bg-support-container',
      'text-on-support-container',
      'enabled:hover:bg-support-container-hovered',
      'enabled:active:bg-support-container-pressed',
      'focus-visible:bg-support-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'basic',
    class: tw([
      'bg-basic-container',
      'text-on-basic-container',
      'enabled:hover:bg-basic-container-hovered',
      'enabled:active:bg-basic-container-pressed',
      'focus-visible:bg-basic-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'accent',
    class: tw([
      'bg-accent-container',
      'text-on-accent-container',
      'enabled:hover:bg-accent-container-hovered',
      'enabled:active:bg-accent-container-pressed',
      'focus-visible:bg-accent-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'success',
    class: tw([
      'bg-success-container',
      'text-on-success-container',
      'enabled:hover:bg-success-container-hovered',
      'enabled:active:bg-success-container-pressed',
      'focus-visible:bg-success-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'alert',
    class: tw([
      'bg-alert-container',
      'text-on-alert-container',
      'enabled:hover:bg-alert-container-hovered',
      'enabled:active:bg-alert-container-pressed',
      'focus-visible:bg-alert-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'danger',
    class: tw([
      'bg-error-container',
      'text-on-error-container',
      'enabled:hover:bg-error-container-hovered',
      'enabled:active:bg-error-container-pressed',
      'focus-visible:bg-error-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'info',
    class: tw([
      'bg-info-container',
      'text-on-info-container',
      'enabled:hover:bg-info-container-hovered',
      'enabled:active:bg-info-container-pressed',
      'focus-visible:bg-info-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'neutral',
    class: tw([
      'bg-neutral-container',
      'text-on-neutral-container',
      'enabled:hover:bg-neutral-container-hovered',
      'enabled:active:bg-neutral-container-pressed',
      'focus-visible:bg-neutral-container-focused',
    ]),
  },
  {
    design: 'tinted',
    intent: 'surface',
    class: tw([
      'bg-surface',
      'text-on-surface',
      'enabled:hover:bg-surface-hovered',
      'enabled:active:bg-surface-pressed',
      'focus-visible:bg-surface-focused',
    ]),
  },
  /** Spacings **/
  {
    design: 'tinted',
    hasClearButton: false,
    class: tw(['px-md']),
  },
  {
    design: 'tinted',
    hasClearButton: true,
    class: tw(['pl-md']),
  },
] as const
