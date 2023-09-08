import { cva, type VariantProps } from 'class-variance-authority'

export const thumbVariants = cva(['block h-xl w-xl rounded-full'], {
  variants: {
    intent: {
      main: ['bg-main'],
      support: ['bg-support'],
      accent: ['bg-accent'],
      basic: ['bg-basic'],
      info: ['bg-info'],
      neutral: ['bg-neutral'],
      success: ['bg-success'],
      alert: ['bg-alert'],
      danger: ['bg-error'],
    },
  },
  defaultVariants: {
    intent: 'basic',
  },
})

export type SliderThumbVariantsProps = VariantProps<typeof thumbVariants>
