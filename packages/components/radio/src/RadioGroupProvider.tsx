import { ReactNode, useMemo } from 'react'

import { RadioVariantsProps } from './Radio.variants'
import { RadioGroupContext } from './RadioGroupContext'

export interface RadioGroupProviderProps extends Pick<RadioVariantsProps, 'intent' | 'size'> {
  children: ReactNode
}

export const RadioGroupProvider = ({ intent, size, children }: RadioGroupProviderProps) => {
  const value = useMemo(() => ({ intent, size }), [intent, size])

  return <RadioGroupContext.Provider value={value}>{children}</RadioGroupContext.Provider>
}
