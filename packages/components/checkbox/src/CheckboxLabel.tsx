import { Label } from '@spark-ui/label'
import { PropsWithChildren } from 'react'

import { labelStyles, type LabelStylesProps } from './CheckboxLabel.styles'

export interface CheckboxLabelProps
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
   * When true, prevents the user from interacting with the checkbox item.
   */
  disabled?: boolean
}

export const CheckboxLabel = ({ className, disabled, ...others }: CheckboxLabelProps) => {
  return <Label className={labelStyles({ className, disabled })} {...others} />
}

CheckboxLabel.displayName = 'CheckboxLabel'
