import { createContext, useContext } from 'react'

export interface FormControlContextState {
  id: string
  labelId?: string
  name?: string
  description?: string
  isInvalid?: boolean
  isRequired?: boolean
  onMessageIdAdd: (id: string) => void
  onMessageIdRemove: (id: string) => void
  onLabelIdAdd: (id: string) => void
  onLabelIdRemove: () => void
}

export const FormControlContext = createContext<Partial<FormControlContextState>>({
  isInvalid: false,
  isRequired: false,
})

export const useFormControl = () => {
  const context = useContext(FormControlContext)

  if (!context) {
    throw Error('useFormControl must be used within a FormControlContext Provider')
  }

  return context
}
