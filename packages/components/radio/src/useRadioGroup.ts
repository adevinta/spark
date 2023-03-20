import { useContext } from 'react'

import { RadioGroupContext } from './RadioGroupContext'

export const useRadioGroup = () => {
  const context = useContext(RadioGroupContext)

  return context
}
