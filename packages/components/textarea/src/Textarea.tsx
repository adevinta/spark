import { Input } from '@spark-ui/input'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  /**
   * If `false`, the textarea won't be resizable.
   */
  isResizable?: boolean
}

const Root = forwardRef<HTMLTextAreaElement, PropsWithChildren<TextareaProps>>(
  ({ className, disabled, rows = 1, isResizable = true, ...others }, ref) => {
    return (
      <Input
        className={cx(className, 'py-[var(--sz-10)]', isResizable ? 'resize-y' : 'resize-none')}
        data-spark-component="textarea"
        disabled={disabled}
        asChild
      >
        <textarea ref={ref} rows={rows} {...others} />
      </Input>
    )
  }
)

export const Textarea = Object.assign(Root, {
  id: Input.id,
})

Textarea.displayName = 'Textarea'
