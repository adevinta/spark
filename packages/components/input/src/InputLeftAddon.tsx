import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputLeftAddonProps = InputAddonProps

export const InputLeftAddon = forwardRef<HTMLDivElement, InputLeftAddonProps>(
  ({ className, ...others }, ref) => {
    return <InputAddon ref={ref} className="pl-lg border-r-none rounded-r-none" {...others} />
  }
)

InputLeftAddon.displayName = 'InputLeftAddon'
