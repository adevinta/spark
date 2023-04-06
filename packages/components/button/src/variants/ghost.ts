import { tw } from '@spark-ui/internal-utils'

export const ghostVariants = [
  {
    intent: 'primary',
    design: 'ghost',
    class: tw([
      'text-primary',
      'enabled:hover:bg-primary-container-hovered',
      'enabled:active:bg-primary-container-hovered',
      'focus-visible:bg-primary-container-focused',
    ]),
  },
  {
    intent: 'secondary',
    design: 'ghost',
    class: tw([
      'text-secondary',
      'enabled:hover:bg-secondary-container-hovered',
      'enabled:active:bg-secondary-container-hovered',
      'focus-visible:bg-secondary-container-focused',
    ]),
  },
  {
    intent: 'success',
    design: 'ghost',
    class: tw([
      'text-success',
      'enabled:hover:bg-success-container-hovered',
      'enabled:active:bg-success-container-hovered',
      'focus-visible:bg-success-container-focused',
    ]),
  },
  {
    intent: 'alert',
    design: 'ghost',
    class: tw([
      'text-alert',
      'enabled:hover:bg-alert-container-hovered',
      'enabled:active:bg-alert-container-hovered',
      'focus-visible:bg-alert-container-focused',
    ]),
  },
  {
    intent: 'danger',
    design: 'ghost',
    class: tw([
      'text-error',
      'enabled:hover:bg-error-container-hovered',
      'enabled:active:bg-error-container-hovered',
      'focus-visible:bg-error-container-focused',
    ]),
  },
  {
    intent: 'neutral',
    design: 'ghost',
    class: tw([
      'text-neutral',
      'enabled:hover:bg-neutral-container-hovered',
      'enabled:active:bg-neutral-container-hovered',
      'focus-visible:bg-neutral-container-focused',
    ]),
  },
  {
    intent: 'surface',
    design: 'ghost',
    class: tw([
      'text-on-surface',
      'enabled:hover:bg-surface-hovered',
      'enabled:active:bg-surface-hovered',
      'focus-visible:bg-surface-focused',
    ]),
  },
] as const
