import { Input, InputProps } from '@spark-ui/input'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export interface TextareaProps
  extends ComponentPropsWithoutRef<'textarea'>,
    Pick<InputProps, 'intent'> {}

export const Textarea = forwardRef<HTMLTextAreaElement, PropsWithChildren<TextareaProps>>(
  ({ className, intent = 'neutral', disabled, rows = 1, ...others }, ref) => {
    return (
      <Input
        className={cx(className, 'py-md resize-y')}
        intent={intent}
        disabled={disabled}
        asChild
      >
        <textarea ref={ref} rows={rows} {...others} />
      </Input>
    )
  }
)

Textarea.displayName = 'Textarea'
