import { tw } from '@spark-ui/internal-utils'

export const intentVariants = [
  // current
  {
    intent: 'current',
    isEmpty: true,
    class: tw(['border-current']),
  },
  {
    intent: 'current',
    isEmpty: false,
    class: tw(['before:border-current after:border-current']),
  },
  // basic
  {
    intent: 'basic',
    isEmpty: true,
    class: tw(['border-basic']),
  },
  {
    intent: 'basic',
    isEmpty: false,
    class: tw(['before:border-basic after:border-basic']),
  },
  // main
  {
    intent: 'main',
    isEmpty: true,
    class: tw(['border-main']),
  },
  {
    intent: 'main',
    isEmpty: false,
    class: tw(['before:border-main after:border-main']),
  },
  // support
  {
    intent: 'support',
    isEmpty: true,
    class: tw(['border-support']),
  },
  {
    intent: 'support',
    isEmpty: false,
    class: tw(['before:border-support after:border-support']),
  },
  // accent
  {
    intent: 'accent',
    isEmpty: true,
    class: tw(['border-accent']),
  },
  {
    intent: 'accent',
    isEmpty: false,
    class: tw(['before:border-accent after:border-accent']),
  },
  // success
  {
    intent: 'success',
    isEmpty: true,
    class: tw(['border-success']),
  },
  {
    intent: 'success',
    isEmpty: false,
    class: tw(['before:border-success after:border-success']),
  },
  // alert
  {
    intent: 'alert',
    isEmpty: true,
    class: tw(['border-alert']),
  },
  {
    intent: 'alert',
    isEmpty: false,
    class: tw(['before:border-alert after:border-alert']),
  },
  // danger
  {
    intent: 'danger',
    isEmpty: true,
    class: tw(['border-error']),
  },
  {
    intent: 'danger',
    isEmpty: false,
    class: tw(['before:border-error after:border-error']),
  },
  // info
  {
    intent: 'info',
    isEmpty: true,
    class: tw(['border-info']),
  },
  {
    intent: 'info',
    isEmpty: false,
    class: tw(['before:border-info after:border-info']),
  },
  // neutral
  {
    intent: 'neutral',
    isEmpty: true,
    class: tw(['border-neutral']),
  },
  {
    intent: 'neutral',
    isEmpty: false,
    class: tw(['before:border-neutral after:border-neutral']),
  },
  // surface
  {
    intent: 'surface',
    isEmpty: true,
    class: tw(['border-surface']),
  },
  {
    intent: 'surface',
    isEmpty: false,
    class: tw(['before:border-surface after:border-surface']),
  },
] as const
