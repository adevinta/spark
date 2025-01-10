import { cx } from 'class-variance-authority'
import { RefObject } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'
import { useInputGroup } from './InputGroupContext'

export type InputLeadingAddonProps = InputAddonProps & {
  ref?: RefObject<HTMLDivElement>
}

const Root = ({ className, ref, ...others }: InputLeadingAddonProps) => {
  const { disabled, readOnly } = useInputGroup()
  const isInactive = disabled || readOnly

  return (
    <div className={cx('rounded-l-lg', isInactive ? 'bg-on-surface/dim-5' : null)}>
      <InputAddon
        ref={ref}
        className={cx(className, 'mr-[-1px] !rounded-r-none rounded-l-lg')}
        {...others}
      />
    </div>
  )
}

export const InputLeadingAddon = Object.assign(Root, {
  id: 'LeadingAddon',
})

Root.displayName = 'InputGroup.LeadingAddon'
