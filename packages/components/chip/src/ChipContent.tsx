import { cx } from 'class-variance-authority'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

export type ChipContentProps = ComponentPropsWithoutRef<'span'>

export const ChipContent = forwardRef<HTMLSpanElement, ChipContentProps>(
  ({ children, className }, forwardedRef) => {
    return (
      <span className={cx('inline-block grow truncate', className)} ref={forwardedRef}>
        {children}
      </span>
    )
  }
)

ChipContent.displayName = 'Chip.Content'
