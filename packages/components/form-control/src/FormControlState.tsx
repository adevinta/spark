import { FormControlContextState, useFormControl } from './FormControlContext'

type State = Pick<
  FormControlContextState,
  'id' | 'name' | 'description' | 'isRequired' | 'isInvalid'
>

export interface FormControlState {
  children: (state: State) => JSX.Element
}

export const FormControlState = ({ children }: FormControlState) => {
  const { id, name, isInvalid, isRequired, description } = useFormControl()

  return children({ id, name, isRequired, isInvalid, description })
}

FormControlState.displayName = 'FormControlState'
