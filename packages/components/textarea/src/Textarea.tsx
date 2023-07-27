import { Input } from '@spark-ui/input'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  /**
   * If true, the textarea won't be resizable.
   */
  isResizeDisabled?: boolean
}

const Root = forwardRef<HTMLTextAreaElement, PropsWithChildren<TextareaProps>>(
  ({ className, disabled, rows = 1, isResizeDisabled = false, ...others }, ref) => {
    return (
      <Input
        className={cx(
          className,
          'py-[var(--sz-10)]',
          isResizeDisabled ? 'resize-none' : 'resize-y'
        )}
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
