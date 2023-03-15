import React, { PropsWithChildren } from 'react'

import { buttonStyles, type ButtonStylesProps } from './Button.styles'

/** Review: Prop VS ButtonProps */
interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'disabled'>,
    ButtonStylesProps {}

export const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      design = 'filled',
      disabled = false,
      intent = 'primary',
      reversed = false,
      shape = 'rounded',
      size = 'md',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        role="button"
        ref={ref}
        className={buttonStyles({
          design,
          disabled,
          intent,
          reversed,
          shape,
          size,
        })}
        disabled={!!disabled}
        {...rest}
      />
    )
  }
)
