import { ReactNode, useContext } from 'react'

import { FormFieldContext, FormFieldContextState } from './FormFieldContext'

type State = Partial<
  Pick<
    FormFieldContextState,
    'id' | 'name' | 'description' | 'labelId' | 'isRequired' | 'isInvalid'
  >
>

export interface FormFieldStateProps {
  children: (state: State) => ReactNode
}

export const useFormFieldState = () => {
  const { id, name, description, labelId, isRequired, isInvalid } =
    useContext(FormFieldContext) || {}

  return { id, name, description, labelId, isRequired, isInvalid } as State
}

export const FormFieldState = ({ children }: FormFieldStateProps) => {
  const { id, name, isInvalid, labelId, isRequired, description } = useFormFieldState()

  return children({ id, labelId, name, isRequired, isInvalid, description })
}

FormFieldState.displayName = 'FormFieldState'
