const sizes = ['sm', 'md', 'lg'] as const

const intents = [
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

const designs = ['filled', 'outlined', 'tinted', 'ghost', 'contrast'] as const

const shapes = ['rounded', 'square', 'pill'] as const

export { sizes, intents, designs, shapes }
