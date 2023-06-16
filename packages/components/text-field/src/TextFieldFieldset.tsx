import { InputContainer, InputContainerProps } from '@spark-ui/input'
import { ComponentPropsWithoutRef } from 'react'

export interface TextFieldFieldsetProps
  extends ComponentPropsWithoutRef<'fieldset'>,
    Pick<InputContainerProps, 'intent' | 'isDisabled'> {}

export const TextFieldFieldset = ({ intent, isDisabled, ...others }: TextFieldFieldsetProps) => {
  return (
    <InputContainer intent={intent} isDisabled={isDisabled} asChild>
      <fieldset aria-hidden="true" {...others} />
    </InputContainer>
  )
}
