import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputTrailingAddonProps = InputAddonProps

export const InputTrailingAddon = forwardRef<
  HTMLDivElement,
  Omit<InputTrailingAddonProps, 'placement'>
>(({ asChild = false, className, ...others }, ref) => (
  <InputAddon
    ref={ref}
    asChild={asChild}
    placement="right"
    className={cx(className, '!rounded-l-none rounded-r-lg ml-[-1px]')}
    {...others}
  />
))

InputTrailingAddon.displayName = 'InputGroup.TrailingAddon'
