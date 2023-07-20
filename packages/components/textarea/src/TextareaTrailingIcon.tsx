import { InputGroup, InputTrailingIconProps } from '@spark-ui/input'

export type TextareaTrailingIconProps = InputTrailingIconProps

export const TextareaTrailingIcon = (props: InputTrailingIconProps) => {
  return <InputGroup.TrailingIcon {...props} />
}

TextareaTrailingIcon.type = 'TrailingIcon'
