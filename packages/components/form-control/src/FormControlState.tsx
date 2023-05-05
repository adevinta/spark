import { FormControlContextState, useFormControl } from './FormControlContext'

type State = Pick<FormControlContextState, 'id' | 'name' | 'description' | 'isInvalid'>

export interface FormControlState {
  children: (state: State) => JSX.Element
}

export const FormControlState = ({ children }: FormControlState) => {
  const { id, name, isInvalid, description } = useFormControl()

  return children({ id, name, isInvalid, description })
}

FormControlState.displayName = 'FormControlState'
