import { Label, LabelProps } from '@spark-ui/label'
import { Slottable } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { Children, cloneElement, forwardRef, ReactElement, ReactNode } from 'react'
import { isElement } from 'react-is'

import { useFormField } from './FormFieldContext'
import { FormFieldRequiredIndicator } from './FormFieldRequiredIndicator'

export interface FormFieldLabelProps extends LabelProps {
  /**
   * Element shown when the input is required inside the label.
   */
  requiredIndicator?: ReactNode
}

const append = (children: ReactNode, requiredIndicator: ReactNode) => {
  if (!isElement(children)) {
    return null
  }

  const { props } = children as ReactElement

  const childChildren = Children.map(
    [...Children.toArray(props?.children), requiredIndicator],
    (child, index) => <Slottable key={index}>{child}</Slottable>,
  )

  return cloneElement(children as ReactElement, { children: childChildren })
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
    ref,
  ) => {
    const control = useFormField()

    const { disabled, labelId, isRequired } = control
    const htmlFor = asChild ? undefined : htmlForProp || control.id

    const child = asChild ? (
      append(children, isRequired ? requiredIndicator : null)
    ) : (
      <>
        {children}
        {isRequired && requiredIndicator}
      </>
    )

    return (
      <Label
        ref={ref}
        id={labelId}
        data-spark-component="form-field-label"
        htmlFor={htmlFor}
        className={cx(
          className,
          'flex items-center gap-sm',
          disabled ? 'pointer-events-none text-on-surface/dim-3' : undefined,
        )}
        asChild={asChild}
        {...others}
      >
        {child}
      </Label>
    )
  },
)

FormFieldLabel.displayName = 'FormField.Label'
