import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

export type ChipLeadingIconProps = ComponentPropsWithoutRef<'span'>
export const ChipLeadingIcon = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ children, className }) => {
    return (
      <span
        className={['mr-sm flex h-full items-center justify-center', className]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </span>
    )
  }
)

ChipLeadingIcon.displayName = 'Chip.LeadingIcon'
