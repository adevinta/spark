import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputLeftAddonProps = InputAddonProps

export const InputLeftAddon = forwardRef<HTMLDivElement, InputLeftAddonProps>(
  ({ className, ...others }, ref) => {
    return (
      <InputAddon
        ref={ref}
        className={cx(className, 'pl-lg border-r-none rounded-r-none')}
        {...others}
      />
    )
  }
)

InputLeftAddon.displayName = 'InputGroup.LeftAddon'
