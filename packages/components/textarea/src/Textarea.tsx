import { Input, InputProps } from '@spark-ui/input'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export interface TextareaProps
  extends ComponentPropsWithoutRef<'textarea'>,
    Pick<InputProps, 'intent'> {}

export const Textarea = forwardRef<HTMLTextAreaElement, PropsWithChildren<TextareaProps>>(
  ({ className, intent, ...others }, ref) => {
    return (
      <Input className={cx(className, 'py-md resize-y')} intent={intent} asChild>
        <textarea ref={ref} {...others} />
      </Input>
    )
  }
)

Textarea.displayName = 'Textarea'
