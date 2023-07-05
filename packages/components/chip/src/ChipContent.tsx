import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { type ChipContentStylesProps } from './ChipContent.styles'

export interface ChipContentProps
  extends ComponentPropsWithoutRef<'span'>,
    ChipContentStylesProps {}

export const ChipContent = forwardRef<HTMLSpanElement, ChipContentProps>(({ children }) => {
  return <span className="inline-block grow truncate">{children}</span>
})

ChipContent.displayName = 'Chip.Content'
