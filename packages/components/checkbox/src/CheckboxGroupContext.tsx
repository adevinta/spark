import { createContext, useContext } from 'react'

import { CheckboxProps } from './Checkbox'

export interface CheckboxGroupContextState extends Pick<CheckboxProps, 'intent'> {
  /**
   * The value of the checkbox group
   */
  value?: string[]
  /**
   * A set of ids separated by a space used to describe the input component given by a set of messages.
   */
  description?: string
  /**
   * If true, the checkbox group will be invalid.
   */
  isInvalid?: boolean
  /**
   * If true, the checkbox group will be required.
   */
  isRequired?: boolean
  /**
   * Callback used to update or notify the value of the checkbox group
   */
  onChange?: (checked: boolean, changed: string) => void
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextState>(
  {} as CheckboxGroupContextState
)

export const useCheckboxGroup = () => {
  const context = useContext(CheckboxGroupContext)

  return context
}
