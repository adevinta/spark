import { createContext, useContext } from 'react'

export interface FormControlContextState {
  id: string
  name?: string
  description: string
  isInvalid?: boolean
  onMessageIdAdd: (id: string) => void
  onMessageIdRemove: (id: string) => void
}

export const FormControlContext = createContext<FormControlContextState>({
  isInvalid: false,
} as FormControlContextState)

export const useFormControl = () => {
  const context = useContext(FormControlContext)

  if (!context) {
    throw Error('useFormControl must be used within a FormControlContext Provider')
  }

  return context
}
