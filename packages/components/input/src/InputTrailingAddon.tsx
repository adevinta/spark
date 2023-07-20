import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'
import { useInputGroup } from './InputGroupContext'

export type InputTrailingAddonProps = InputAddonProps

export const InputTrailingAddon = forwardRef<HTMLDivElement, InputTrailingAddonProps>(
  ({ asChild = false, className, ...others }, ref) => {
    const { disabled } = useInputGroup()

    return (
      <div className={cx('rounded-r-lg', disabled ? 'bg-on-surface/dim-5' : null)}>
        <InputAddon
          ref={ref}
          asChild={asChild}
          className={cx(className, '!rounded-l-none rounded-r-lg ml-[-1px]')}
          {...others}
        />
      </div>
    )
  }
)

InputTrailingAddon.displayName = 'InputGroup.TrailingAddon'
