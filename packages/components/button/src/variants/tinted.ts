import { tw } from '@spark-ui/internal-utils'

export const tintedVariants = [
  {
    intent: 'primary',
    design: 'tinted',
    class: tw([
      'bg-primary-container',
      'text-on-primary-container',
      'enabled:hover:bg-primary-container-hovered',
      'enabled:active:bg-primary-container-hovered',
      'focus-visible:bg-primary-container-focused',
    ]),
  },
  {
    intent: 'secondary',
    design: 'tinted',
    class: tw([
      'bg-secondary-container',
      'text-on-secondary-container',
      'enabled:hover:bg-secondary-container-hovered',
      'enabled:active:bg-secondary-container-hovered',
      'focus-visible:bg-secondary-container-focused',
    ]),
  },
  {
    intent: 'success',
    design: 'tinted',
    class: tw([
      'bg-success-container',
      'text-on-success-container',
      'enabled:hover:bg-success-container-hovered',
      'enabled:active:bg-success-container-hovered',
      'focus-visible:bg-success-container-focused',
    ]),
  },
  {
    intent: 'alert',
    design: 'tinted',
    class: tw([
      'bg-alert-container',
      'text-on-alert-container',
      'enabled:hover:bg-alert-container-hovered',
      'enabled:active:bg-alert-container-hovered',
      'focus-visible:bg-alert-container-focused',
    ]),
  },
  {
    intent: 'danger',
    design: 'tinted',
    class: tw([
      'bg-error-container',
      'text-on-error-container',
      'enabled:hover:bg-error-container-hovered',
      'enabled:active:bg-error-container-hovered',
      'focus-visible:bg-error-container-focused',
    ]),
  },
  {
    intent: 'neutral',
    design: 'tinted',
    class: tw([
      'bg-neutral-container',
      'text-on-neutral-container',
      'enabled:hover:bg-neutral-container-hovered',
      'enabled:active:bg-neutral-container-hovered',
      'focus-visible:bg-neutral-container-focused',
    ]),
  },
  {
    intent: 'surface',
    design: 'tinted',
    class: tw([
      'bg-surface',
      'text-on-surface',
      'enabled:hover:bg-surface-hovered',
      'enabled:active:bg-surface-hovered',
      'focus-visible:bg-surface-focused',
    ]),
  },
] as const
