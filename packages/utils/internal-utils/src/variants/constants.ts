const sizes = ['current', 'sm', 'md', 'lg', 'xl'] as const

const intents = [
  'current',
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'alert',
  'danger',
  'neutral',
  'surface',
] as const

const designs = ['filled', 'outlined', 'tinted', 'ghost', 'contrast', 'dashed'] as const

const shapes = ['rounded', 'square', 'pill'] as const

export { sizes, intents, designs, shapes }
