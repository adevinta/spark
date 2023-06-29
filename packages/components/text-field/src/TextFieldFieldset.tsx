import { InputContainer, InputContainerProps } from '@spark-ui/input'
import { ComponentPropsWithoutRef } from 'react'

export interface TextFieldFieldsetProps
  extends ComponentPropsWithoutRef<'fieldset'>,
    Pick<InputContainerProps, 'intent'> {}

export const TextFieldFieldset = ({ intent, ...others }: TextFieldFieldsetProps) => {
  return (
    <InputContainer intent={intent} asChild>
      <fieldset aria-hidden="true" {...others} />
    </InputContainer>
  )
}
