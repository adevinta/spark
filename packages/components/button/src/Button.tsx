import { Slot } from '@spark-ui/slot'
import React, { PropsWithChildren } from 'react'

import { buttonStyles, type ButtonStylesProps } from './Button.styles'

export interface ButtonProps
  extends PropsWithChildren<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>>,
    ButtonStylesProps {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      design = 'filled',
      disabled = false,
      intent = 'primary',
      shape = 'rounded',
      size = 'md',
      asChild,
      className,
      ...others
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'button'

    return (
      <Component
        data-spark-component="button"
        ref={ref}
        className={buttonStyles({
          className,
          design,
          disabled,
          intent,
          shape,
          size,
        })}
        disabled={!!disabled}
        {...others}
      />
    )
  }
)
