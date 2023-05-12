import { Label, LabelProps } from '@radix-ui/react-label'
import { Slottable } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode } from 'react'

import { useFormField } from './FormFieldContext'
import { FormRequiredIndicator } from './FormRequiredIndicator'

export interface FormLabelProps extends LabelProps {
  requiredIndicator?: ReactNode
}

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  (
    {
      htmlFor: htmlForProp,
      className,
      children,
      requiredIndicator = <FormRequiredIndicator />,
      asChild,
      ...others
    },
    ref
  ) => {
    const control = useFormField()

    const { labelId, isRequired } = control
    const htmlFor = asChild ? undefined : htmlForProp || control.id

    return (
      <Label
        ref={ref}
        id={labelId}
        data-spark-component="form-label"
        htmlFor={htmlFor}
        className={cx(className, 'flex items-center gap-sm text-body-1')}
        asChild={asChild}
        {...others}
      >
        <Slottable>{children}</Slottable>

        {isRequired && requiredIndicator}
      </Label>
    )
  }
)

FormLabel.displayName = 'FormField.Label'
