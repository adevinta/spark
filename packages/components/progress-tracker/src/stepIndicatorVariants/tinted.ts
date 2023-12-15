export const tintedVariants = [
  {
    design: 'tinted',
    intent: 'basic',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-basic-container bg-basic-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-basic-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-basic-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'basic',
    state: 'active',
    class: 'text-on-basic bg-basic',
  },
  {
    design: 'tinted',
    intent: 'support',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-support-container bg-support-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-support-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-support-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'support',
    state: 'active',
    class: 'text-on-support bg-support',
  },
  {
    design: 'tinted',
    intent: 'main',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-main-container bg-main-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-main-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-main-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'main',
    state: 'active',
    class: 'text-on-main bg-main',
  },
  {
    design: 'tinted',
    intent: 'neutral',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-neutral-container bg-neutral-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-neutral-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-neutral-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'neutral',
    state: 'active',
    class: 'text-on-neutral bg-neutral',
  },
  {
    design: 'tinted',
    intent: 'info',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-info-container bg-info-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-info-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-info-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'info',
    state: 'active',
    class: 'text-on-info bg-info',
  },
  {
    design: 'tinted',
    intent: 'accent',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-accent-container bg-accent-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-accent-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-accent-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'accent',
    state: 'active',
    class: 'text-on-accent bg-accent',
  },
  {
    design: 'tinted',
    intent: 'danger',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-error-container bg-error-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-error-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-error-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'danger',
    state: 'active',
    class: 'text-on-error bg-error',
  },
  {
    design: 'tinted',
    intent: 'alert',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-alert-container bg-alert-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-alert-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-alert-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'alert',
    state: 'active',
    class: 'text-on-alert bg-alert',
  },
  {
    design: 'tinted',
    intent: 'success',
    state: ['complete', 'incomplete'],
    class: [
      'text-on-success-container bg-success-container',
      'group-data-[interactive=true]/btn:group-hover/btn:bg-success-container-hovered',
      'group-data-[interactive=false]/btn:group-hover/btn:bg-success-container',
    ],
  },
  {
    design: 'tinted',
    intent: 'success',
    state: 'active',
    class: 'text-on-success bg-success',
  },
] as const
