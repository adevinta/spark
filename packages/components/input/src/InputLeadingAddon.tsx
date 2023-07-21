import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputLeadingAddonProps = InputAddonProps

const Root = forwardRef<HTMLDivElement, InputLeadingAddonProps>(({ className, ...others }, ref) => (
  <InputAddon
    ref={ref}
    className={cx(className, 'rounded-l-lg !rounded-r-none mr-[-1px]')}
    {...others}
  />
))

export const InputLeadingAddon = Object.assign(Root, {
  id: 'LeadingAddon',
})

InputLeadingAddon.displayName = 'InputGroup.LeadingAddon'
