import { tw } from './default'

export const tintedVariants = [
  {
    intent: 'primary',
    design: 'tinted',
    class: tw(['bg-primary-container', 'text-on-primary-container']),
  },
  {
    intent: 'secondary',
    design: 'tinted',
    class: tw(['bg-secondary-container', 'text-on-secondary-container']),
  },
  {
    intent: 'success',
    design: 'tinted',
    class: tw(['bg-success-container', 'text-on-success-container']),
  },
  {
    intent: 'alert',
    design: 'tinted',
    class: tw(['bg-alert-container', 'text-on-alert-container']),
  },
  {
    intent: 'danger',
    design: 'tinted',
    class: tw(['bg-error-container', 'text-on-error-container']),
  },
  {
    intent: 'info',
    design: 'tinted',
    class: tw(['bg-info-container', 'text-on-info-container']),
  },
  {
    intent: 'neutral',
    design: 'tinted',
    class: tw(['bg-neutral-container', 'text-on-neutral-container']),
  },
] as const
