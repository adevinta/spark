import { createContext, useContext } from 'react'

export interface InputGroupContext {
  disabled?: boolean
  hasLeadingIcon: boolean
  hasTrailingIcon: boolean
  hasLeadingAddon: boolean
  hasTrailingAddon: boolean
  state: null | undefined | 'error' | 'alert' | 'success'
  isStandalone?: boolean
}

export const InputGroupContext = createContext<Partial<InputGroupContext> | null>(null)

export const useInputGroup = () => {
  const context = useContext(InputGroupContext)

  return context || { isStandalone: true }
}
