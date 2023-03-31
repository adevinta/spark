export const defaultVariants = {
  design: 'filled',
  intent: 'primary',
  shape: 'rounded',
} as const

export const tw = <T>(a: T): T => a
