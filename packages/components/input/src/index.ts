import { FC } from 'react'

import { InputGroup as Root, InputGroupProps } from './InputGroup'
import { InputLeftAddon, InputLeftAddonProps } from './InputLeftAddon'
import { InputLeftElement, InputLeftElementProps } from './InputLeftElement'
import { InputRightAddon, InputRightAddonProps } from './InputRightAddon'
import { InputRightElement, InputRightElementProps } from './InputRightElement'

export * from './Input'
export { type InputGroupProps } from './InputGroup'
export { type InputLeftAddonProps } from './InputLeftAddon'
export { type InputLeftElementProps } from './InputLeftElement'
export { type InputRightAddonProps } from './InputRightAddon'
export { type InputRightElementProps } from './InputRightElement'

export const InputGroup: FC<InputGroupProps> & {
  LeftAddon: FC<InputLeftAddonProps>
  RightAddon: FC<InputRightAddonProps>
  LeftElement: FC<InputLeftElementProps>
  RightElement: FC<InputRightElementProps>
} = Object.assign(Root, {
  LeftAddon: InputLeftAddon,
  RightAddon: InputRightAddon,
  LeftElement: InputLeftElement,
  RightElement: InputRightElement,
})

InputGroup.LeftAddon.displayName = 'InputGroup.LeftAddon'
InputGroup.RightAddon.displayName = 'InputGroup.RightAddon'
InputGroup.LeftElement.displayName = 'InputGroup.LeftElement'
InputGroup.RightElement.displayName = 'InputGroup.RightElement'
