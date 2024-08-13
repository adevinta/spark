import { Label, LabelProps } from '@spark-ui/label'
import { Slottable } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode } from 'react'

import { useFormField } from './FormFieldContext'
import { FormFieldRequiredIndicator } from './FormFieldRequiredIndicator'

export interface FormFieldLabelProps extends LabelProps {
  /**
   * Element shown when the input is required inside the label.
   */
  requiredIndicator?: ReactNode
}

export const FormFieldLabel = forwardRef<HTMLLabelElement, FormFieldLabelProps>(
  (
    {
      htmlFor: htmlForProp,
      className,
      children,
      requiredIndicator = <FormFieldRequiredIndicator />,
      asChild,
      ...others
    },
    ref
  ) => {
    const control = useFormField()

    const { disabled, labelId, isRequired } = control
    const htmlFor = asChild ? undefined : htmlForProp || control.id

    return (
      <Label
        ref={ref}
        id={labelId}
        data-spark-component="form-field-label"
        htmlFor={htmlFor}
        className={cx(
          className,
          'flex items-center gap-sm',
          disabled ? 'pointer-events-none text-on-surface/dim-3' : undefined
        )}
        asChild={asChild}
        {...others}
      >
        <>
          <Slottable>{children}</Slottable>
          {isRequired && requiredIndicator}
        </>
      </Label>
    )
  }
)

FormFieldLabel.displayName = 'FormField.Label'
