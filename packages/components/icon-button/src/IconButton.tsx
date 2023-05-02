import { Button, ButtonProps } from '@spark-ui/button'
import React from 'react'

import { iconButtonStyles } from './IconButton.styles'

export interface IconButtonProps extends ButtonProps {
  'aria-label': string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      design = 'filled',
      disabled = false,
      intent = 'primary',
      shape = 'rounded',
      size = 'md',
      className,
      ...others
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        className={iconButtonStyles({ size, className })}
        design={design}
        disabled={disabled}
        intent={intent}
        shape={shape}
        size={size}
        {...others}
      />
    )
  }
)

IconButton.displayName = 'IconButton'
