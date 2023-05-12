import { createContext, useContext } from 'react'

export interface FormFieldContextState {
  id: string
  labelId?: string
  name?: string
  description?: string
  isInvalid?: boolean
  isRequired?: boolean
  onMessageIdAdd: (id: string) => void
  onMessageIdRemove: (id: string) => void
}

export const FormFieldContext = createContext<FormFieldContextState | null>(null)

export const useFormField = () => {
  const context = useContext(FormFieldContext)

  if (!context) {
    throw Error('useFormField must be used within a TabsContext Provider')
  }

  return context
}
