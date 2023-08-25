import { createContext, useContext } from 'react'

export interface ProgressContextValue {
  value: number
  max: number
  isIndeterminate: boolean
  onLabelId: (id?: string) => void
}

export const ProgressContext = createContext<ProgressContextValue | null>(null)

export const useProgress = () => {
  const context = useContext(ProgressContext)

  if (!context) {
    throw new Error('useProgress must be used within a Progress provider')
  }

  return context
}
