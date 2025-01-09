import { cx } from 'class-variance-authority'
import React, { RefObject } from 'react'

import { ChipIcon, type ChipIconProps } from './ChipIcon'

export type ChipTrailingIconProps = ChipIconProps & {
  ref?: RefObject<HTMLSpanElement>
}

export const ChipTrailingIcon = ({
  className,
  ref: forwardedRef,
  ...props
}: ChipTrailingIconProps) => (
  <ChipIcon className={cx('ml-md', className)} ref={forwardedRef} {...props} />
)

ChipTrailingIcon.displayName = 'Chip.TrailingIcon'
