import { Icon } from '@spark-ui/icon'
import { DeleteFill } from '@spark-ui/icons/dist/icons/DeleteFill'
import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import {
  chipClearButtonStyles,
  type ChipClearButtonStylesProps,
  chipClearButtonWrapperStyles,
} from './ChipClearButton.styles'
import { useChipContext } from './useChipContext'

export interface ChipClearButtonProps
  extends ComponentPropsWithoutRef<'span'>,
    ChipClearButtonStylesProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ChipClearButton = forwardRef<HTMLSpanElement, ChipClearButtonProps>(
  ({
    onClick,
    children = (
      <Icon label="close" className="opacity-dim-3">
        <DeleteFill />
      </Icon>
    ),
  }) => {
    const { design, disabled } = useChipContext()

    const onClearHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      onClick && onClick(event)
    }

    return (
      <span
        className={chipClearButtonWrapperStyles({
          isBordered: design === 'dashed',
          disabled: !!disabled,
        })}
        onClick={onClearHandler}
      >
        <button
          type="button"
          {...{ ...(disabled && { disabled }) }}
          className={chipClearButtonStyles({ disabled })}
        >
          {children}
        </button>
      </span>
    )
  }
)

ChipClearButton.displayName = 'Chip.ClearButton'
