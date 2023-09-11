import { createContext, useContext } from 'react'

import type { SliderProps } from './Slider'

export type SliderContextInterface = Pick<SliderProps, 'intent'>

export const SliderContext = createContext<SliderContextInterface>({} as SliderContextInterface)

export const useSliderContext = () => {
  const context = useContext(SliderContext)

  if (!context) {
    throw Error('useSliderContext must be used within a SliderContext Provider')
  }

  return context
}
