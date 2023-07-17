import { Slot } from '@spark-ui/slot'
import { Children, type ComponentPropsWithoutRef, forwardRef, type PropsWithChildren } from 'react'

import { inputAddonStyles, InputAddonStylesProps } from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'intent' | 'disabled'> {}

export const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
  ({ asChild: asChildProp = true, className, children, ...others }, ref) => {
    const { state, disabled } = useInputGroup()

    const isRawText = typeof children === 'string'
    const asChild = isRawText ? false : asChildProp
    const child = isRawText ? children : Children.only(children)
    const Component = asChild && !isRawText ? Slot : 'div'

    return (
      <Component
        ref={ref}
        className={inputAddonStyles({ className, intent: state, disabled, asChild })}
        {...(disabled && { tabIndex: -1 })}
        {...others}
      >
        {child}
      </Component>
    )
  }
)

InputAddon.displayName = 'InputAddon'
