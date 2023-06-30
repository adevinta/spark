import { ReactNode, useMemo } from 'react'

import { RadioGroupContext } from './RadioGroupContext'
import type { RadioInputProps } from './RadioInput'

export interface RadioGroupProviderProps extends Pick<RadioInputProps, 'intent' | 'disabled'> {
  children: ReactNode
}

export const RadioGroupProvider = ({ intent, disabled, children }: RadioGroupProviderProps) => {
  const value = useMemo(() => ({ intent, disabled }), [intent, disabled])

  return <RadioGroupContext.Provider value={value}>{children}</RadioGroupContext.Provider>
}
