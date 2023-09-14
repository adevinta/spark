import { cx } from 'class-variance-authority'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

export type ChipIconProps = ComponentPropsWithoutRef<'span'>

export const ChipIcon = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'>>(
  ({ children, className }, forwardedRef) => {
    return (
      <span className={cx('flex h-full items-center justify-center', className)} ref={forwardedRef}>
        {children}
      </span>
    )
  }
)

ChipIcon.displayName = 'Chip.Icon'
