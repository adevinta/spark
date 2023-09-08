import { cva, cx, type VariantProps } from 'class-variance-authority'

export const trackStyles = cx('relative rounded-sm grow h-sm bg-on-background/dim-4')

export const rangeVariants = cva(['absolute rounded-sm h-full'], {
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

export type SliderRangeVariantsProps = VariantProps<typeof rangeVariants>
