import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputAddonStyles, InputAddonStylesProps } from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'intent' | 'isDisabled' | 'isHovered' | 'isFocused'> {}

export const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
  ({ className, ...others }, ref) => {
    const { intent } = useInputGroup() || {}

    return <div ref={ref} className={inputAddonStyles({ className, intent })} {...others} />
  }
)

InputAddon.displayName = 'InputAddon'
