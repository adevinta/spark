import { cva } from 'class-variance-authority'

export const contentStyles = cva(
  ['w-full p-lg', 'focus-visible:outline-none focus-visible:u-ring-inset'],
  {
    variants: {
      forceMount: {
        true: 'data-[state=inactive]:hidden',
        false: '',
      },
    },
  }
)
