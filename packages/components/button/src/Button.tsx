import React, { PropsWithChildren } from 'react'

import { buttonStyles, type ButtonStylesProps } from './Button.styles'

/** Review: Prop VS ButtonProps */
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'disabled'>,
    ButtonStylesProps {}

export const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      design = 'filled',
      disabled = false,
      intent = 'primary',
      shape = 'rounded',
      size = 'md',
      ...otherProps
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={buttonStyles({
          design,
          disabled,
          intent,
          shape,
          size,
        })}
        disabled={!!disabled}
        {...otherProps}
      />
    )
  }
)
