import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputAddonStyles, InputAddonStylesProps } from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'status' | 'isDisabled'> {}

export const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
  ({ className, ...others }, ref) => {
    const { isDisabled } = useInputGroup() || {}

    return <div ref={ref} className={inputAddonStyles({ className, isDisabled })} {...others} />
  }
)

InputAddon.displayName = 'InputAddon'
