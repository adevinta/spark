import { createContext, useContext } from 'react'

import { CheckboxInputStylesProps } from './CheckboxInput.styles'

export interface CheckboxGroupContextState extends Pick<CheckboxInputStylesProps, 'intent'> {
  /**
   * The id of the checkbox group.
   */
  id: string
  /**
   * The name of the group. Submitted with its owning form as part of a name/value pair.
   */
  name?: string
  /**
   * The value of the checkbox group.
   */
  value?: string[]
  /**
   * A set of ids separated by a space used to describe the input component given by a set of messages.
   */
  description?: string
  /**
   * The validation state of the checkbox group.
   */
  state?: 'error' | 'success' | 'alert'
  /**
   * If true, the checkbox group will be invalid.
   */
  isInvalid?: boolean
  /**
   * If true, the checkbox group will be required.
   */
  isRequired?: boolean
  /**
   * Callback used to update or notify the value of the checkbox group.
   */
  onCheckedChange?: (checked: boolean, changed: string) => void
}

export const CheckboxGroupContext = createContext<Partial<CheckboxGroupContextState>>({})

export const useCheckboxGroup = () => {
  const context = useContext(CheckboxGroupContext)

  return context
}
