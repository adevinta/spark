import { Label } from '@radix-ui/react-label'
import { PropsWithChildren } from 'react'

import { radioLabelStyles, RadioLabelStylesProps } from './RadioLabel.styles'

export interface RadioLabelProps
  extends RadioLabelStylesProps,
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
   * When true, prevents the user from interacting with the radio item.
   */
  disabled?: boolean
}

export const RadioLabel = ({ className, disabled, ...others }: RadioLabelProps) => {
  return <Label className={radioLabelStyles({ className, disabled })} {...others} />
}
