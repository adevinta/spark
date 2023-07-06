import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputTrailingAddonProps = InputAddonProps

export const InputTrailingAddon = forwardRef<HTMLDivElement, InputTrailingAddonProps>(
  ({ className, ...others }, ref) => (
    <InputAddon
      ref={ref}
      className={cx(className, 'rounded-r-lg focus-within:[&>*]:rounded-r-lg')}
      {...others}
    />
  )
)

InputTrailingAddon.displayName = 'InputGroup.TrailingAddon'
