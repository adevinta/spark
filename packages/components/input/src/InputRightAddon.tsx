import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputRightAddonProps = InputAddonProps

export const InputRightAddon = forwardRef<HTMLDivElement, InputRightAddonProps>(
  ({ className, ...others }, ref) => {
    return <InputAddon ref={ref} className={cx(className, 'pr-lg')} {...others} />
  }
)

InputRightAddon.displayName = 'InputRightAddon'
