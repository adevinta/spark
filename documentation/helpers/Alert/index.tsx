import { PropsWithChildren } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const styles = cva(['sb-unstyled  rounded-s p-m text-m'], {
  variants: {
    marginY: {
      small: 'my-s',
      medium: 'my-m',
      large: 'my-l',
    },
    marginTop: {
      small: 'mt-s',
      medium: 'mt-m',
      large: 'mt-l',
    },
    marginBottom: {
      small: 'mb-s',
      medium: 'mb-m',
      large: 'mb-l',
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
        <div className="pr-s text-2xl">{emojiLookup[kind]}</div>
        <div className="ml-s">{children}</div>
      </div>
    </div>
  )
}
