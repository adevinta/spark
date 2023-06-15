import { InputContainer, InputContainerProps } from '@spark-ui/input'

import { TextFieldLegend } from './TextFieldLegend'

export interface TextFieldFieldsetProps extends Omit<InputContainerProps, 'asChild'> {
  isExpanded: boolean
}

export const TextFieldFieldset = ({ children, isExpanded, ...others }: TextFieldFieldsetProps) => {
  return (
    <InputContainer {...others} asChild>
      <fieldset aria-hidden="true">
        <TextFieldLegend isExpanded={isExpanded}>{children}</TextFieldLegend>
      </fieldset>
    </InputContainer>
  )
}
