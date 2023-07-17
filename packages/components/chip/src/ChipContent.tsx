import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

export type ChipContentProps = ComponentPropsWithoutRef<'span'>

export const ChipContent = forwardRef<HTMLSpanElement, ChipContentProps>(
  ({ children, className }) => {
    return (
      <span className={['inline-block grow truncate', className].filter(Boolean).join(' ')}>
        {children}
      </span>
    )
  }
)

ChipContent.displayName = 'Chip.Content'
