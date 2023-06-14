import { Label as SparkLabel } from '@spark-ui/label'
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

export const Label = ({ className, disabled, ...others }: LabelProps) => (
  <SparkLabel className={labelStyles({ disabled, className })} {...others} />
)
