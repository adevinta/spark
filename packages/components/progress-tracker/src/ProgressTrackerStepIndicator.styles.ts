import { cva, type VariantProps } from 'class-variance-authority'

export const stepIndicatorVariant = cva(
  [
    'relative flex shrink-0 justify-center items-center',
    'rounded-full border-sm',
    'text-body-2 font-bold',
    'group-disabled/btn:opacity-dim-3 group-disabled/btn:bg-transparent',
  ],
  {
    variants: {
      size: {
        sm: [
          'w-sz-16 h-sz-16',
          'group-data-[orientation=horizontal]/list:mt-[-16px]',
          'group-data-[orientation=vertical]/list:ml-[-16px]',
        ],
        md: [
          'w-sz-24 h-sz-24',
          'group-data-[orientation=horizontal]/list:mt-[-24px]',
          'group-data-[orientation=vertical]/list:ml-[-24px]',
        ],
        lg: [
          'w-sz-32 h-sz-32',
          'group-data-[orientation=horizontal]/list:mt-[-32px]',
          'group-data-[orientation=vertical]/list:ml-[-32px]',
        ],
      },
      intent: {
        basic: 'text-on-basic-container',
        support: 'text-on-support-container',
        main: 'text-on-main-container',
        neutral: 'text-on-neutral-container',
        info: 'text-on-info-container',
        accent: 'text-on-accent-container',
        danger: 'text-on-error-container',
        alert: 'text-on-alert-container',
        success: 'text-on-success-container',
      },
      state: {
        complete: ['group-data-[interactive=false]/btn:group-hover/btn:bg-transparent'],
        incomplete: ['group-data-[interactive=false]/btn:group-hover/btn:bg-transparent'],
        active: '',
      },
    },
    compoundVariants: [
      // Complete/Incomplete
      {
        intent: 'basic',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-basic/dim-5',
      },
      {
        intent: 'support',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-support/dim-5',
      },
      {
        intent: 'main',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-main/dim-5',
      },
      {
        intent: 'neutral',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-neutral/dim-5',
      },
      {
        intent: 'info',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-info/dim-5',
      },
      {
        intent: 'accent',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-accent/dim-5',
      },
      {
        intent: 'danger',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-error/dim-5',
      },
      {
        intent: 'alert',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-alert/dim-5',
      },
      {
        intent: 'success',
        state: ['complete', 'incomplete'],
        class: 'group-data-[interactive=true]/btn:group-hover/btn:bg-success/dim-5',
      },
      // Active
      {
        intent: 'basic',
        state: 'active',
        class: 'bg-basic-container',
      },
      {
        intent: 'support',
        state: 'active',
        class: 'bg-support-container',
      },
      {
        intent: 'main',
        state: 'active',
        class: 'bg-main-container',
      },
      {
        intent: 'neutral',
        state: 'active',
        class: 'bg-neutral-container',
      },
      {
        intent: 'info',
        state: 'active',
        class: 'bg-info-container',
      },
      {
        intent: 'accent',
        state: 'active',
        class: 'bg-accent-container',
      },
      {
        intent: 'danger',
        state: 'active',
        class: 'bg-error-container',
      },
      {
        intent: 'alert',
        state: 'active',
        class: 'bg-alert-container',
      },
      {
        intent: 'success',
        state: 'active',
        class: 'bg-success-container',
      },
    ],
    defaultVariants: {
      size: 'lg',
      state: 'incomplete',
      intent: 'basic',
    },
  }
)

export type StepIndicatorVariantProps = VariantProps<typeof stepIndicatorVariant>
