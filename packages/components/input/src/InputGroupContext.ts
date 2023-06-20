import { createContext, useContext } from 'react'

import { InputGroupProps } from './InputGroup'

export interface InputGroupContext extends Pick<InputGroupProps, 'intent'> {
  isDisabled?: boolean
  isLeftElementVisible: boolean
  isRightElementVisible: boolean
  isLeftAddonVisible: boolean
  isRightAddonVisible: boolean
}

export const InputGroupContext = createContext<Partial<InputGroupContext> | null>(null)

export const useInputGroup = () => {
  return useContext(InputGroupContext)
}
