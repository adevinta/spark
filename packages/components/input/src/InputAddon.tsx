import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputAddonStyles, InputAddonStylesProps } from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'state' | 'isDisabled'> {}

export const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
  ({ className, children, ...others }, ref) => {
    const { isDisabled } = useInputGroup() || {}

    return (
      <div ref={ref} className={inputAddonStyles({ className, isDisabled })} {...others}>
        {children}
      </div>
    )
  }
)

InputAddon.displayName = 'InputAddon'
