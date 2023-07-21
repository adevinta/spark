import { InputGroup, InputTrailingIconProps } from '@spark-ui/input'

export type TextareaTrailingIconProps = InputTrailingIconProps

export const TextareaTrailingIcon = (props: InputTrailingIconProps) => {
  return <InputGroup.TrailingIcon {...props} />
}

TextareaTrailingIcon.id = InputGroup.TrailingIcon.id
TextareaTrailingIcon.displayName = 'TextareaGroup.TrailingIcon'
