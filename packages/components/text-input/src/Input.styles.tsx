import { makeVariants, tw } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const labelStyles = cva(
  [
    'relative',
    'min-w-0',
    'h-3xl',
    'flex',
    'items-center',
    'justify-between',
    'box-content',
    'text-on-surface',
    'first:ml-lg',
    'last:mr-lg',
  ],
  {
    variants: {
      /**
       * Color scheme of the input.
       */
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'danger', 'info', 'neutral', 'surface']
      >({
        primary: [],
        secondary: [],
        success: [],
        alert: [],
        danger: [],
        info: [],
        neutral: [],
        surface: [],
      }),
      applyDefaultSize: {
        true: ['w-[25ch]'],
      },
      disabled: {
        true: ['cursor-not-allowed'],
      },
    },
    defaultVariants: {
      applyDefaultSize: true,
    },
  }
)

export const inputStyles = cva([
  'h-xl',
  'text-body-1',
  'focus-visible:outline-0',
  'text-ellipsis',
  'bg-transparent',
  'w-full',
])

export const labelTextStyles = cva(
  ['absolute', 'flex', 'items-center', 'h-full', 'opacity-dim-1', 'transition-all', 'duration-100'],
  {
    variants: {
      isExpanded: {
        true: ['text-body-1', 'top-[0%]'],
        false: ['text-body-2', 'top-[-50%]'],
      },
      /**
       * Color scheme of the inputField.
       */
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'danger', 'info', 'neutral', 'surface']
      >({
        primary: [],
        secondary: [],
        success: [],
        alert: [],
        danger: [],
        info: [],
        neutral: [],
        surface: [],
      }),
    },
    compoundVariants: [
      {
        intent: 'primary',
        isExpanded: false,
        class: tw(['text-primary']),
      },
      {
        intent: 'secondary',
        isExpanded: false,
        class: tw(['text-secondary']),
      },
      {
        intent: 'success',
        isExpanded: false,
        class: tw(['text-success']),
      },
      {
        intent: 'alert',
        isExpanded: false,
        class: tw(['text-alert']),
      },
      {
        intent: 'danger',
        isExpanded: false,
        class: tw(['text-error']),
      },
      {
        intent: 'info',
        isExpanded: false,
        class: tw(['text-info']),
      },
      {
        intent: 'neutral',
        isExpanded: false,
        class: tw(['text-neutral']),
      },
      {
        intent: 'surface',
        isExpanded: false,
        class: tw(['text-on-surface']),
      },
    ],
  }
)

export const labelTextMandatoryStyles = cva(['opacity-dim-3', 'transition-all', 'duration-100'], {
  variants: {
    isExpanded: {
      true: ['text-body-2'],
      false: ['text-caption'],
    },
  },
})

export type InputStylesProps = VariantProps<typeof labelStyles>
