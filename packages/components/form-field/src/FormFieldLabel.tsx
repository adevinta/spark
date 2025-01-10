import { Label, LabelProps } from '@spark-ui/label'
import { Slottable } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { ReactNode, Ref } from 'react'

import { useFormField } from './FormFieldContext'
import { FormFieldRequiredIndicator } from './FormFieldRequiredIndicator'

export interface FormFieldLabelProps extends LabelProps {
  /**
   * Element shown when the input is required inside the label.
   */
  requiredIndicator?: ReactNode
  ref?: Ref<HTMLLabelElement>
}

export const FormFieldLabel = ({
  htmlFor: htmlForProp,
  className,
  children,
  requiredIndicator = <FormFieldRequiredIndicator />,
  asChild,
  ref,
  ...others
}: FormFieldLabelProps) => {
  const control = useFormField()

  const { disabled, labelId, isRequired } = control
  const htmlFor = asChild ? undefined : htmlForProp || control.id

  return (
    <Label
      ref={ref}
      id={labelId}
      data-spark-component="form-field-label"
      htmlFor={htmlFor}
      className={cx(className, disabled ? 'pointer-events-none text-on-surface/dim-3' : undefined)}
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

FormFieldLabel.displayName = 'FormField.Label'
