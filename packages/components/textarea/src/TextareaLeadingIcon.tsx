import { InputGroup, InputLeadingIconProps } from '@spark-ui/input'

export type TextareaLeadingIconProps = InputLeadingIconProps

export const TextareaLeadingIcon = (props: InputLeadingIconProps) => {
  return <InputGroup.LeadingIcon {...props} />
}

TextareaLeadingIcon.type = 'LeadingIcon'
