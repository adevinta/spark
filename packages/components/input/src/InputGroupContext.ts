import { createContext, useContext } from 'react'

export interface InputGroupContext {
  disabled?: boolean
  readOnly?: boolean
  hasLeadingIcon: boolean
  hasTrailingIcon: boolean
  hasLeadingAddon: boolean
  hasTrailingAddon: boolean
  hasClearButton: boolean
  state: null | undefined | 'error' | 'alert' | 'success'
  isStandalone?: boolean
  onClear: () => void
}

export const InputGroupContext = createContext<Partial<InputGroupContext> | null>(null)

export const useInputGroup = () => {
  const context = useContext(InputGroupContext)

  return context || { isStandalone: true }
}
