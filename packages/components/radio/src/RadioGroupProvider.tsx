import { ReactNode, useMemo } from 'react'

import { RadioGroupContext } from './RadioGroupContext'
import { RadioInputProps } from './RadioInput'

export interface RadioGroupProviderProps
  extends Pick<RadioInputProps, 'intent' | 'size' | 'disabled'> {
  children: ReactNode
}

export const RadioGroupProvider = ({
  intent,
  size,
  disabled,
  children,
}: RadioGroupProviderProps) => {
  const value = useMemo(() => ({ intent, size, disabled }), [intent, size, disabled])

  return <RadioGroupContext.Provider value={value}>{children}</RadioGroupContext.Provider>
}
