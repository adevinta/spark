import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputLeadingAddonProps = InputAddonProps

export const InputLeadingAddon = forwardRef<
  HTMLDivElement,
  Omit<InputLeadingAddonProps, 'placement'>
>(({ asChild = false, className, ...others }, ref) => {
  return (
    <InputAddon
      ref={ref}
      asChild={asChild}
      placement="left"
      className={cx(className, 'rounded-l-lg !rounded-r-none mr-[-1px]')}
      {...others}
    />
  )
})

InputLeadingAddon.displayName = 'InputGroup.LeadingAddon'
