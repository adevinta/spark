import { Input } from '@spark-ui/input'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export type TextareaProps = ComponentPropsWithoutRef<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, PropsWithChildren<TextareaProps>>(
  ({ className, disabled, rows = 1, ...others }, ref) => {
    return (
      <Input className={cx(className, 'py-[var(--sz-10)] resize-y')} disabled={disabled} asChild>
        <textarea ref={ref} rows={rows} {...others} />
      </Input>
    )
  }
)

Textarea.displayName = 'Textarea'
