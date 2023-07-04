import { FC } from 'react'

import {
  InputLeadingAddon,
  type InputLeadingAddonProps,
  InputTrailingAddon,
  type InputTrailingAddonProps,
} from './InputAddon'
import { InputGroup as Root, type InputGroupProps } from './InputGroup'
import {
  InputLeadingIcon,
  type InputLeadingIconProps,
  InputTrailingIcon,
  type InputTrailingIconProps,
} from './InputIcon'

export { useInputGroup } from './InputGroupContext'

export * from './Input'
export { type InputGroupProps } from './InputGroup'
export { type InputLeadingAddonProps, type InputTrailingAddonProps } from './InputAddon'
export { type InputLeadingIconProps, type InputTrailingIconProps } from './InputIcon'

export const InputGroup: FC<InputGroupProps> & {
  LeadingAddon: FC<InputLeadingAddonProps>
  TrailingAddon: FC<InputTrailingAddonProps>
  LeadingIcon: FC<InputLeadingIconProps>
  TrailingIcon: FC<InputTrailingIconProps>
} = Object.assign(Root, {
  LeadingAddon: InputLeadingAddon,
  TrailingAddon: InputTrailingAddon,
  LeadingIcon: InputLeadingIcon,
  TrailingIcon: InputTrailingIcon,
})

InputGroup.LeadingAddon.displayName = 'InputGroup.LeadingAddon'
InputGroup.TrailingAddon.displayName = 'InputGroup.TrailingAddon'
InputGroup.LeadingIcon.displayName = 'InputGroup.LeadingIcon'
InputGroup.TrailingIcon.displayName = 'InputGroup.TrailingIcon'
