import { cx } from 'class-variance-authority'

import { InputIcon, InputIconProps } from './InputIcon'

export type InputLeadingIconProps = InputIconProps

export const InputLeadingIcon = ({ className, ...others }: InputLeadingIconProps) => (
  <InputIcon className={cx(className, 'left-lg')} {...others} />
)

InputLeadingIcon.displayName = 'InputGroup.LeadingIcon'
