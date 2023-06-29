import { createContext, useContext } from 'react'

import { InputContainerProps } from './InputContainer'

export interface InputGroupContext extends Pick<InputContainerProps, 'intent'> {
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
