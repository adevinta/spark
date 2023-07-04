import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputAddonStyles, InputAddonStylesProps } from './InputAddon.styles'
import { useInputGroup } from './InputGroupContext'

interface InputAddonProps
  extends ComponentPropsWithoutRef<'div'>,
    Omit<InputAddonStylesProps, 'state' | 'isDisabled'> {}

const InputAddon = forwardRef<HTMLDivElement, PropsWithChildren<InputAddonProps>>(
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

export type InputTrailingAddonProps = InputAddonProps

export const InputTrailingAddon = forwardRef<HTMLDivElement, InputTrailingAddonProps>(
  ({ className, ...others }, ref) => (
    <InputAddon ref={ref} className={cx(className, 'rounded-r-lg border-l-none')} {...others} />
  )
)

InputTrailingAddon.displayName = 'InputTrailingAddon'

export type InputLeadingAddonProps = InputAddonProps

export const InputLeadingAddon = forwardRef<HTMLDivElement, InputLeadingAddonProps>(
  ({ className, ...others }, ref) => (
    <InputAddon ref={ref} className={cx(className, 'rounded-l-lg border-r-none')} {...others} />
  )
)

InputLeadingAddon.displayName = 'InputLeadingAddon'
