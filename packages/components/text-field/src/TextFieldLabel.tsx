import { Label, LabelProps } from '@spark-ui/label'
import { Slottable } from '@spark-ui/slot'
import { cx } from 'class-variance-authority'
import { forwardRef, PropsWithChildren, ReactNode } from 'react'

export interface TextFieldLabelProps extends LabelProps {
  isRequired?: boolean
  requiredIndicator?: ReactNode
}

export const TextFieldLabel = forwardRef<HTMLLabelElement, PropsWithChildren<TextFieldLabelProps>>(
  (
    { className, requiredIndicator = <Label.RequiredIndicator />, isRequired, children, ...others },
    ref
  ) => {
    return (
      <Label ref={ref} className={cx(className, 'flex items-center gap-sm')} {...others}>
        <Slottable>{children}</Slottable>

        {isRequired && requiredIndicator}
      </Label>
    )
  }
)

TextFieldLabel.displayName = 'TextFieldLabel'
