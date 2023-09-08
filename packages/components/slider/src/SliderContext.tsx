import { createContext, useContext } from 'react'

import type { SliderRootProps } from './SliderRoot'

export type SliderContextInterface = Pick<SliderRootProps, 'intent'>

export const SliderContext = createContext<SliderContextInterface>({} as SliderContextInterface)

export const useSliderContext = () => {
  const context = useContext(SliderContext)

  if (!context) {
    throw Error('useSliderContext must be used within a SliderContext Provider')
  }

  return context
}
