import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'
import { useInputGroup } from './InputGroupContext'

export type InputLeadingAddonProps = InputAddonProps

const Root = forwardRef<HTMLDivElement, InputLeadingAddonProps>(({ className, ...others }, ref) => {
  const { disabled } = useInputGroup()

  return (
    <div className={cx('rounded-l-lg', disabled ? 'bg-on-surface/dim-5' : null)}>
      <InputAddon
        ref={ref}
        className={cx(className, 'rounded-l-lg !rounded-r-none mr-[-1px]')}
        {...others}
      />
    </div>
  )
})

export const InputLeadingAddon = Object.assign(Root, {
  id: 'LeadingAddon',
})

InputLeadingAddon.displayName = 'InputGroup.LeadingAddon'
