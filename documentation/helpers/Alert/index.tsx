import { PropsWithChildren } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const styles = cva(['sb-unstyled  rounded-s p-md text-m'], {
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
    kind: 'info',
  },
})

export type StylesProps = ExcludeNull<VariantProps<typeof styles>>

const emojiLookup: Record<NonNullable<StylesProps['kind']>, string> = {
  info: 'ℹ️',
  error: '🚨',
  success: '✅',
  warning: '⚠️',
}

export function Alert({ children, kind = 'info', ...variants }: PropsWithChildren<StylesProps>) {
  return (
    <div className={styles({ kind, ...variants })}>
      <div className="flex items-center">
        <div className="pr-sm text-2xl">{emojiLookup[kind]}</div>
        <div className="ml-sm">{children}</div>
      </div>
    </div>
  )
}
