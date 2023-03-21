export const defaultVariants = {
  design: 'filled',
  intent: 'primary',
  size: 'md',
  shape: 'rounded',
} as const

export const tw = <T>(a: T): T => a
