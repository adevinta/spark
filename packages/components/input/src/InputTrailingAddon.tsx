import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { InputAddon, InputAddonProps } from './InputAddon'

export type InputTrailingAddonProps = InputAddonProps

const Root = forwardRef<HTMLDivElement, InputTrailingAddonProps>(
  ({ className, ...others }, ref) => (
    <InputAddon
      ref={ref}
      className={cx(className, '!rounded-l-none rounded-r-lg ml-[-1px]')}
      {...others}
    />
  )
)

export const InputTrailingAddon = Object.assign(Root, {
  id: 'TrailingAddon',
})

InputTrailingAddon.displayName = 'InputGroup.TrailingAddon'
