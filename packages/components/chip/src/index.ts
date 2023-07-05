import { FC } from 'react'

import { Chip as Root, ChipProps } from './Chip'
import { ChipClearButton } from './ChipClearButton'
import { ChipContent } from './ChipContent'

export { type ChipClearButtonProps } from './ChipClearButton'
export { type ChipContentProps } from './ChipContent'

ChipClearButton.displayName = 'Chip.ClearButton'
export const Chip: FC<ChipProps> & {
  ClearButton: typeof ChipClearButton
  Content: typeof ChipContent
} = Object.assign(Root, { ClearButton: ChipClearButton, Content: ChipContent })
