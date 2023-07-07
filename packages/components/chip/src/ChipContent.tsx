import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

export type ChipContentProps = ComponentPropsWithoutRef<'span'>
export const ChipContent = forwardRef<HTMLSpanElement, ChipContentProps>(({ children }) => {
  return <span className="inline-block grow truncate">{children}</span>
})

ChipContent.displayName = 'Chip.Content'
