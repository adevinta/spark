import React, { PropsWithChildren } from 'react'

import { buttonStyles, type ButtonStylesProps } from './Button.styles'

/** Review: Prop VS ButtonProps */
interface Props
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,
    ButtonStylesProps {}

export const Button = React.forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  ({ size, intent, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonStyles({
          size,
          intent,
        })}
        {...rest}
      />
    )
  }
)
