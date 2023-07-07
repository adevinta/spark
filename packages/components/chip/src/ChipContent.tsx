import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

export const ChipContent = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ children }) => {
    return <span className="inline-block grow truncate">{children}</span>
  }
)

ChipContent.displayName = 'Chip.Content'
