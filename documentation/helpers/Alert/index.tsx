import { PropsWithChildren } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const styles = cva(['sb-unstyled  rounded-s p-m'], {
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

export type StylesProps = VariantProps<typeof styles>

const emojiMapper: Record<NonNullable<StylesProps['kind'] | null>, string> = {
  info: 'ℹ️',
  error: '🚨',
  success: '✅',
  warning: '⚠️',
}

export function Alert({ children, kind, ...variants }: PropsWithChildren<StylesProps>) {
  return (
    <div className={styles({ kind, ...variants })}>
      <div className="flex items-center">
        <div className="pr-s text-2xl">{emojiMapper[kind ?? 'info']}</div>
        <div className="ml-s flex-1 md:flex md:justify-between">
          <div className="text-m">{children}</div>
        </div>
      </div>
    </div>
  )
}
