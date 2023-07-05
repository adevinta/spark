import { FC } from 'react'

import { InputGroup as Root, type InputGroupProps } from './InputGroup'
import { InputLeadingAddon } from './InputLeadingAddon'
import { InputLeadingIcon } from './InputLeadingIcon'
import { InputStateIndicator } from './InputStateIndicator'
import { InputTrailingAddon } from './InputTrailingAddon'
import { InputTrailingIcon } from './InputTrailingIcon'

export * from './Input'
export { useInputGroup } from './InputGroupContext'
export { type InputGroupProps } from './InputGroup'
export { type InputLeadingIconProps } from './InputLeadingIcon'
export { type InputTrailingIconProps } from './InputTrailingIcon'
export { type InputLeadingAddonProps } from './InputLeadingAddon'
export { type InputTrailingAddonProps } from './InputTrailingAddon'
export { type InputStateIndicatorProps } from './InputStateIndicator'

export const InputGroup: FC<InputGroupProps> & {
  LeadingAddon: typeof InputLeadingAddon
  TrailingAddon: typeof InputTrailingAddon
  LeadingIcon: typeof InputLeadingIcon
  TrailingIcon: typeof InputTrailingIcon
  StateIndicator: typeof InputStateIndicator
} = Object.assign(Root, {
  LeadingAddon: InputLeadingAddon,
  TrailingAddon: InputTrailingAddon,
  LeadingIcon: InputLeadingIcon,
  TrailingIcon: InputTrailingIcon,
  StateIndicator: InputStateIndicator,
})

InputGroup.LeadingAddon.displayName = 'InputGroup.LeadingAddon'
InputGroup.TrailingAddon.displayName = 'InputGroup.TrailingAddon'
InputGroup.LeadingIcon.displayName = 'InputGroup.LeadingIcon'
InputGroup.TrailingIcon.displayName = 'InputGroup.TrailingIcon'
InputGroup.StateIndicator.displayName = 'InputGroup.StateIndicator'
