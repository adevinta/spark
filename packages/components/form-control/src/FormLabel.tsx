import { Label, LabelProps } from '@radix-ui/react-label'
import { Slottable } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode } from 'react'

import { useFormControl } from './FormControlContext'
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
      ...others
    },
    ref
  ) => {
    const { id, isRequired } = useFormControl()

    const htmlFor = htmlForProp || id

    return (
      <Label
        ref={ref}
        data-spark-component="form-label"
        htmlFor={htmlFor}
        className={cx(className, 'flex items-center gap-sm text-body-1')}
        {...others}
      >
        <Slottable>{children}</Slottable>

        {isRequired && requiredIndicator}
      </Label>
    )
  }
)

FormLabel.displayName = 'FormLabel'
