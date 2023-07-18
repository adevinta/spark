import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type FormFieldCharacterCounterProps = ComponentPropsWithoutRef<'span'> & {
  count: number
  maxCount: number
}

export const FormFieldCharacterCounter = forwardRef<
  HTMLSpanElement,
  FormFieldCharacterCounterProps
>(({ className, count, maxCount, ...others }, ref) => {
  return (
    <span
      ref={ref}
      data-spark-component="form-field-character-counter"
      className={cx(className, 'text-caption', 'text-neutral', 'text-right', 'self-end')}
      {...others}
    >
      {count}/{maxCount}
    </span>
  )
})

FormFieldCharacterCounter.displayName = 'FormField.CharacterCounter'
