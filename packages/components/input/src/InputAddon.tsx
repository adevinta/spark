import { Slot } from '@spark-ui/slot'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputAddonStyles, InputAddonStylesProps } from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'intent' | 'disabled'> {
  asChild?: boolean
}

export const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
  ({ asChild = false, className, children, ...others }, ref) => {
    const { state, disabled } = useInputGroup()

    const Component = asChild ? Slot : 'div'

    return (
      <Component
        ref={ref}
        className={inputAddonStyles({ className, intent: state, disabled, asChild })}
        {...(disabled && { tabIndex: -1 })}
        {...others}
      >
        {children}
      </Component>
    )
  }
)

InputAddon.displayName = 'InputAddon'
