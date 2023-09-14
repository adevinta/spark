import { cx } from 'class-variance-authority'
import React, { forwardRef } from 'react'

import { ChipIcon, type ChipIconProps } from './ChipIcon'

export type ChipLeadingIconProps = ChipIconProps

export const ChipLeadingIcon = forwardRef<HTMLSpanElement, ChipLeadingIconProps>(
  ({ className, ...props }, forwardedRef) => (
    <ChipIcon className={cx('mr-sm', className)} ref={forwardedRef} {...props} />
  )
)

ChipLeadingIcon.displayName = 'Chip.LeadingIcon'
