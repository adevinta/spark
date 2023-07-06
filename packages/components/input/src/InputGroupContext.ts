import { createContext, useContext } from 'react'

export interface InputGroupContext {
  disabled?: boolean
  hasLeadingIcon: boolean
  hasTrailingIcon: boolean
  hasLeadingAddon: boolean
  hasTrailingAddon: boolean
  hasClearButton: boolean
  state: null | undefined | 'error' | 'alert' | 'success'
  isStandalone?: boolean
}

export const InputGroupContext = createContext<Partial<InputGroupContext> | null>(null)

export const useInputGroup = () => {
  return (
    useContext(InputGroupContext) || {
      isStandalone: true,
    }
  )
}
