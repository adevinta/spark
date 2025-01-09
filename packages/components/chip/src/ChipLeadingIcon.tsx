import { cx } from 'class-variance-authority'
import React, { RefObject } from 'react'

import { ChipIcon, type ChipIconProps } from './ChipIcon'

export type ChipLeadingIconProps = ChipIconProps & {
  ref?: RefObject<HTMLSpanElement>
}

export const ChipLeadingIcon = ({
  className,
  ref: forwardedRef,
  ...props
}: ChipLeadingIconProps) => (
  <ChipIcon className={cx('mr-sm', className)} ref={forwardedRef} {...props} />
)

ChipLeadingIcon.displayName = 'Chip.LeadingIcon'
