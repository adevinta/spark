import { FC } from 'react'

import { Chip as Root, ChipProps } from './Chip'
import { ChipClearButton } from './ChipClearButton'

export { type ChipClearButtonProps } from './ChipClearButton'

ChipClearButton.displayName = 'Chip.ClearButton'
export const Chip: FC<ChipProps> & {
  ClearButton: typeof ChipClearButton
} = Object.assign(Root, { ClearButton: ChipClearButton })
