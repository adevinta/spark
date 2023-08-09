import { tw } from '@spark-ui/internal-utils'

export const outlinedVariants = [
  /** Intents **/
  {
    design: 'outlined',
    intent: 'main',
    class: tw([
      'enabled:hover:bg-main/dim-5',
      'enabled:active:bg-main/dim-5',
      'focus-visible:bg-main/dim-5',
      'text-main',
    ]),
  },
  {
    design: 'outlined',
    intent: 'support',
    class: tw([
      'enabled:hover:bg-support/dim-5',
      'enabled:active:bg-support/dim-5',
      'focus-visible:bg-support/dim-5',
      'text-support',
    ]),
  },
  {
    design: 'outlined',
    intent: 'basic',
    class: tw([
      'enabled:hover:bg-basic/dim-5',
      'enabled:active:bg-basic/dim-5',
      'focus-visible:bg-basic/dim-5',
      'text-basic',
    ]),
  },
  {
    intent: 'accent',
    design: 'outlined',
    class: tw([
      'enabled:hover:bg-accent/dim-5',
      'enabled:active:bg-accent/dim-5',
      'focus-visible:bg-accent/dim-5',
      'text-accent',
    ]),
  },
  {
    design: 'outlined',
    intent: 'success',
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
    design: 'outlined',
    intent: 'danger',
    class: tw([
      'enabled:hover:bg-error/dim-5',
      'enabled:active:bg-error/dim-5',
      'focus-visible:bg-error/dim-5',
      'text-error',
    ]),
  },
  {
    design: 'outlined',
    intent: 'info',
    class: tw([
      'enabled:hover:bg-info/dim-5',
      'enabled:active:bg-info/dim-5',
      'focus-visible:bg-info/dim-5',
      'text-info',
    ]),
  },
  {
    design: 'outlined',
    intent: 'neutral',
    class: tw([
      'enabled:hover:bg-neutral/dim-5',
      'enabled:active:bg-neutral/dim-5',
      'focus-visible:bg-neutral/dim-5',
      'text-neutral',
    ]),
  },
  {
    design: 'outlined',
    intent: 'surface',
    class: tw([
      'enabled:hover:bg-surface/dim-5',
      'enabled:active:bg-surface/dim-5',
      'focus-visible:bg-surface/dim-5',
      'text-surface',
    ]),
  },
  /** Spacings **/
  {
    design: 'outlined',
    hasClearButton: false,
    class: tw(['px-md']),
  },
  {
    design: 'outlined',
    hasClearButton: true,
    class: tw(['pl-md']),
  },
] as const
