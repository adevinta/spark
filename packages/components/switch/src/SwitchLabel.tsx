import { Label as RadixLabel } from '@radix-ui/react-label'
import { useFormFieldState } from '@spark-ui/form-field'
import type { PropsWithChildren } from 'react'

import { labelStyles, LabelStylesProps } from './SwitchLabel.styles'

export interface LabelProps
  extends LabelStylesProps,
    PropsWithChildren<React.HTMLAttributes<HTMLLabelElement>> {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * The id of the element the label is associated with.
   */
  htmlFor?: string
  /**
   * When true, prevents the user from interacting with the switch item.
   */
  disabled?: boolean
}

export const Label = ({ className, disabled, htmlFor, ...others }: LabelProps) => {
  const { labelId } = useFormFieldState()

  return (
    <RadixLabel
      className={labelStyles({ className, disabled })}
      htmlFor={htmlFor || labelId}
      {...others}
    />
  )
}
