import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputRightAddonProps = InputAddonProps

export const InputRightAddon = forwardRef<HTMLDivElement, InputRightAddonProps>(
  ({ className, ...others }, ref) => {
    return <InputAddon ref={ref} className="pr-lg border-l-none rounded-l-none" {...others} />
  }
)

InputRightAddon.displayName = 'InputRightAddon'
