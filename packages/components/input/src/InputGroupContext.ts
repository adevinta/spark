import { createContext, useContext } from 'react'

import { type InputContainerProps } from './InputContainer'

export interface InputGroupContext extends Pick<InputContainerProps, 'status'> {
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
