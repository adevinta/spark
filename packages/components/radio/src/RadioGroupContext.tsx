import { createContext } from 'react'

import { RadioInputProps } from './RadioInput'

export const RadioGroupContext = createContext<
  Pick<RadioInputProps, 'intent' | 'size' | 'disabled'>
>({})
