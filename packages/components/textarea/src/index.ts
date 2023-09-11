import { FC } from 'react'

import { TextareaGroup as Root, type TextareaGroupProps } from './TextareaGroup'
import { TextareaLeadingIcon } from './TextareaLeadingIcon'
import { TextareaTrailingIcon } from './TextareaTrailingIcon'

export * from './Textarea'

export const TextareaGroup: FC<TextareaGroupProps> & {
  LeadingIcon: typeof TextareaLeadingIcon
  TrailingIcon: typeof TextareaTrailingIcon
} = Object.assign(Root, {
  LeadingIcon: TextareaLeadingIcon,
  TrailingIcon: TextareaTrailingIcon,
})

TextareaGroup.displayName = 'TextareaGroup'
TextareaLeadingIcon.displayName = 'TextareaGroup.LeadingIcon'
TextareaTrailingIcon.displayName = 'TextareaGroup.TrailingIcon'

export { type TextareaGroupProps } from './TextareaGroup'
export { type TextareaLeadingIconProps } from './TextareaLeadingIcon'
export { type TextareaTrailingIconProps } from './TextareaTrailingIcon'
