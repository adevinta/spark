import { FC } from 'react'

import { Chip as Root, ChipProps } from './Chip'
import { ChipClearButton } from './ChipClearButton'
import { ChipContent } from './ChipContent'
import { ChipLeadingIcon } from './ChipLeadingIcon'

export { type ChipClearButtonProps } from './ChipClearButton'
export { type ChipContentProps } from './ChipContent'
export { type ChipLeadingIconProps } from './ChipLeadingIcon'

ChipClearButton.displayName = 'Chip.ClearButton'
export const Chip: FC<ChipProps> & {
  ClearButton: typeof ChipClearButton
  Content: typeof ChipContent
  LeadingIcon: typeof ChipLeadingIcon
} = Object.assign(Root, {
  ClearButton: ChipClearButton,
  Content: ChipContent,
  LeadingIcon: ChipLeadingIcon,
})
