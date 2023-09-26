import { Root, type ToggleProps as RadixToggleProps } from '@radix-ui/react-toggle'
import { forwardRef } from 'react'

export type ToggleProps = RadixToggleProps

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ children, asChild = true, ...rest }, ref) => {
    return (
      <Root ref={ref} asChild={asChild} {...rest}>
        {children}
      </Root>
    )
  }
)
