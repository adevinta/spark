import { FC } from 'react'

import { InputGroup as Root, type InputGroupProps } from './InputGroup'
import { InputLeftAddon, type InputLeftAddonProps } from './InputLeftAddon'
import { InputLeftElement, type InputLeftElementProps } from './InputLeftElement'
import { InputRightAddon, type InputRightAddonProps } from './InputRightAddon'
import { InputRightElement, type InputRightElementProps } from './InputRightElement'
import { InputStatusIndicator, type InputStatusIndicatorProps } from './InputStatusIndicator'

export { useInputGroup } from './InputGroupContext'

export * from './Input'
export * from './InputPrimitive'
export * from './InputContainer'
export { type InputGroupProps } from './InputGroup'
export { type InputLeftAddonProps } from './InputLeftAddon'
export { type InputLeftElementProps } from './InputLeftElement'
export { type InputRightAddonProps } from './InputRightAddon'
export { type InputRightElementProps } from './InputRightElement'
export { type InputStatusIndicatorProps } from './InputStatusIndicator'

export const InputGroup: FC<InputGroupProps> & {
  LeftAddon: FC<InputLeftAddonProps>
  RightAddon: FC<InputRightAddonProps>
  LeftElement: FC<InputLeftElementProps>
  RightElement: FC<InputRightElementProps>
  StatusIndicator: FC<InputStatusIndicatorProps>
} = Object.assign(Root, {
  LeftAddon: InputLeftAddon,
  RightAddon: InputRightAddon,
  LeftElement: InputLeftElement,
  RightElement: InputRightElement,
  StatusIndicator: InputStatusIndicator,
})

InputGroup.LeftAddon.displayName = 'InputGroup.LeftAddon'
InputGroup.RightAddon.displayName = 'InputGroup.RightAddon'
InputGroup.LeftElement.displayName = 'InputGroup.LeftElement'
InputGroup.RightElement.displayName = 'InputGroup.RightElement'
InputGroup.StatusIndicator.displayName = 'InputGroup.StatusIndicator'
