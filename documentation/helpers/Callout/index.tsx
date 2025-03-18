import { cva, VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

const styles = cva(['sb-unstyled rounded-md p-md text-caption'], {
  variants: {
    marginY: {
      small: 'my-sm',
      medium: 'my-md',
      large: 'my-lg',
    },
    marginTop: {
      small: 'mt-sm',
      medium: 'mt-md',
      large: 'mt-lg',
    },
    marginBottom: {
      small: 'mb-sm',
      medium: 'mb-md',
      large: 'mb-lg',
    },
    kind: {
      success: ['bg-success-container', 'text-on-success-container'],
      error: ['bg-error-container', 'text-on-error-container'],
      warning: ['bg-alert-container', 'text-on-alert-container'],
      info: ['bg-info-container', 'text-on-info-container'],
    },
  },
  defaultVariants: {
    kind: 'info' as const,
  },
})

export type StylesProps = ExcludeNull<VariantProps<typeof styles>>

const emojiLookup: Record<NonNullable<StylesProps['kind']>, string> = {
  info: 'ℹ️',
  error: '🚨',
  success: '✅',
  warning: '⚠️',
}

export function Callout({ children, kind = 'info', ...variants }: PropsWithChildren<StylesProps>) {
  return (
    <div className={styles({ kind, ...variants })}>
      <div className="gap-lg flex items-center">
        <div className="text-display-3">{emojiLookup[kind]}</div>
        <div className="text-body-2">{children}</div>
      </div>
    </div>
  )
}
