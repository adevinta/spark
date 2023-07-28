import { tw } from '@spark-ui/internal-utils'

export const contrastVariants = [
  {
    intent: 'main',
    design: 'contrast',
    class: tw([
      'text-main',
      'hover:bg-main-container-hovered',
      'enabled:active:bg-main-container-pressed',
      'focus-visible:bg-main-container-focused',
    ]),
  },
  {
    intent: 'support',
    design: 'contrast',
    class: tw([
      'text-support',
      'hover:bg-support-container-hovered',
      'enabled:active:bg-support-container-pressed',
      'focus-visible:bg-support-container-focused',
    ]),
  },
  {
    intent: 'accent',
    design: 'contrast',
    class: tw([
      'text-accent',
      'hover:bg-accent-container-hovered',
      'enabled:active:bg-accent-container-pressed',
      'focus-visible:bg-accent-container-focused',
    ]),
  },
  {
    intent: 'basic',
    design: 'contrast',
    class: tw([
      'text-basic',
      'hover:bg-basic-container-hovered',
      'enabled:active:bg-basic-container-pressed',
      'focus-visible:bg-basic-container-focused',
    ]),
  },
  {
    intent: 'success',
    design: 'contrast',
    class: tw([
      'text-success',
      'hover:bg-success-container-hovered',
      'enabled:active:bg-success-container-pressed',
      'focus-visible:bg-success-container-focused',
    ]),
  },
  {
    intent: 'alert',
    design: 'contrast',
    class: tw([
      'text-alert',
      'hover:bg-alert-container-hovered',
      'enabled:active:bg-alert-container-pressed',
      'focus-visible:bg-alert-container-focused',
    ]),
  },
  {
    intent: 'danger',
    design: 'contrast',
    class: tw([
      'text-error',
      'hover:bg-error-container-hovered',
      'enabled:active:bg-error-container-pressed',
      'focus-visible:bg-error-container-focused',
    ]),
  },
  {
    intent: 'info',
    design: 'contrast',
    class: tw([
      'text-info',
      'hover:bg-info-container-hovered',
      'enabled:active:bg-info-container-pressed',
      'focus-visible:bg-info-container-focused',
    ]),
  },
  {
    intent: 'neutral',
    design: 'contrast',
    class: tw([
      'text-neutral',
      'hover:bg-neutral-container-hovered',
      'enabled:active:bg-neutral-container-pressed',
      'focus-visible:bg-neutral-container-focused',
    ]),
  },
  {
    intent: 'surface',
    design: 'contrast',
    class: tw([
      'text-on-surface',
      'hover:bg-surface-hovered',
      'enabled:active:bg-surface-pressed',
      'focus-visible:bg-surface-focused',
    ]),
  },
] as const
