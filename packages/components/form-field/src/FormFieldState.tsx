import { FormFieldContextState, useFormField } from './FormFieldContext'

type State = Pick<
  FormFieldContextState,
  'id' | 'name' | 'description' | 'labelId' | 'isRequired' | 'isInvalid'
>

export interface FormFieldStateProps {
  children: (state: State) => JSX.Element
}

export const FormFieldState = ({ children }: FormFieldStateProps) => {
  const { id, name, isInvalid, labelId, isRequired, description } = useFormField()

  return children({ id, labelId, name, isRequired, isInvalid, description })
}

FormFieldState.displayName = 'FormFieldState'
