import { createContext, useContext } from 'react'

export interface InputGroupContext {
  isDisabled?: boolean
  isLeftElementVisible: boolean
  isRightElementVisible: boolean
  isLeftAddonVisible: boolean
  isRightAddonVisible: boolean
  state: null | undefined | 'error' | 'alert' | 'success'
}

export const InputGroupContext = createContext<Partial<InputGroupContext> | null>(null)

export const useInputGroup = () => {
  return useContext(InputGroupContext)
}
