import { FC } from 'react'

import { Chip as Root, type ChipProps } from './Chip'
import { ChipClearButton } from './ChipClearButton'
import { ChipContent } from './ChipContent'
import { ChipLeadingIcon } from './ChipLeadingIcon'

export { type ChipClearButtonProps } from './ChipClearButton'
export { type ChipContentProps } from './ChipContent'
export { type ChipLeadingIconProps } from './ChipLeadingIcon'

export const Chip: FC<ChipProps> & {
  Content: typeof ChipContent
  LeadingIcon: typeof ChipLeadingIcon
  ClearButton: typeof ChipClearButton
} = Object.assign(Root, {
  Content: ChipContent,
  LeadingIcon: ChipLeadingIcon,
  ClearButton: ChipClearButton,
})

Chip.ClearButton.displayName = 'Chip.ClearButton'
Chip.Content.displayName = 'Chip.Content'
Chip.LeadingIcon.displayName = 'Chip.LeadingIcon'
