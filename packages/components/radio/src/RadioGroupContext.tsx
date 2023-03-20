import { createContext } from 'react'

import { RadioVariantsProps } from './Radio.variants'

export const RadioGroupContext = createContext<Pick<RadioVariantsProps, 'intent' | 'size'>>({})
