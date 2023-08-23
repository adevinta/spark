import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type FormFieldCharactersCountProps = ComponentPropsWithoutRef<'span'> & {
  /**
   * Current value for the input this component belongs to.
   */
  value?: string
  /**
   * Maximum numeric value to be displayed.
   */
  maxLength: number
}

export const FormFieldCharactersCount = forwardRef<HTMLSpanElement, FormFieldCharactersCountProps>(
  ({ className, value = '', maxLength, ...others }, ref) => {
    const count = value.length

    return (
      <span
        ref={ref}
        data-spark-component="form-field-characters-count"
        className={cx(className, 'text-caption', 'text-neutral')}
        {...others}
      >
        {count}/{maxLength}
      </span>
    )
  },
)

FormFieldCharactersCount.displayName = 'FormField.CharactersCount'
