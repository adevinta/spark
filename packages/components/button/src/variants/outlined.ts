import { tw } from '@spark-ui/internal-utils'

export const outlinedVariants = [
  {
    intent: 'primary',
    design: 'outlined',
    class: tw([
      'enabled:hover:bg-primary/dim-5',
      'enabled:active:bg-primary/dim-5',
      'focus-visible:bg-primary/dim-5',
      'text-primary',
    ]),
  },
  {
    intent: 'secondary',
    design: 'outlined',
    class: tw([
      'enabled:hover:bg-secondary/dim-5',
      'enabled:active:bg-secondary/dim-5',
      'focus-visible:bg-secondary/dim-5',
      'text-secondary',
    ]),
  },
  {
    intent: 'success',
    design: 'outlined',
    class: tw([
      'enabled:hover:bg-success/dim-5',
      'enabled:active:bg-success/dim-5',
      'focus-visible:bg-success/dim-5',
      'text-success',
    ]),
  },
  {
    intent: 'alert',
    design: 'outlined',
    class: tw([
      'enabled:hover:bg-alert/dim-5',
      'enabled:active:bg-alert/dim-5',
      'focus-visible:bg-alert/dim-5',
      'text-alert',
    ]),
  },
  {
    intent: 'danger',
    design: 'outlined',
    class: tw([
      'enabled:hover:bg-error/dim-5',
      'enabled:active:bg-error/dim-5',
      'focus-visible:bg-error/dim-5',
      'text-error',
    ]),
  },
  {
    intent: 'neutral',
    design: 'outlined',
    class: tw([
      'enabled:hover:bg-neutral/dim-5',
      'enabled:active:bg-neutral/dim-5',
      'focus-visible:bg-neutral/dim-5',
      'text-neutral',
    ]),
  },
  {
    intent: 'surface',
    design: 'outlined',
    class: tw([
      'enabled:hover:bg-surface/dim-5',
      'enabled:active:bg-surface/dim-5',
      'focus-visible:bg-surface/dim-5',
      'text-surface',
    ]),
  },
] as const
