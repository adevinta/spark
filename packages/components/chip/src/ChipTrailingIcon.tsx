import { cx } from 'class-variance-authority'
import React, { forwardRef } from 'react'

import { ChipIcon, type ChipIconProps } from './ChipIcon'

export type ChipTrailingIconProps = ChipIconProps

export const ChipTrailingIcon = forwardRef<HTMLSpanElement, ChipTrailingIconProps>(
  ({ className, ...props }, forwardedRef) => (
    <ChipIcon className={cx('ml-md', className)} ref={forwardedRef} {...props} />
  )
)

ChipTrailingIcon.displayName = 'Chip.TrailingIcon'
