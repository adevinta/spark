import { Icon } from '@spark-ui/icon'
import { DeleteFill } from '@spark-ui/icons/dist/icons/DeleteFill'
import { Slot } from '@spark-ui/slot'
import React, { ComponentPropsWithoutRef, forwardRef, useCallback } from 'react'

import {
  chipClearButtonStyles,
  type ChipClearButtonStylesProps,
  chipClearButtonWrapperStyles,
} from './ChipClearButton.styles'
import { useChipContext } from './useChipContext'

export interface ChipClearButtonProps
  extends ComponentPropsWithoutRef<'span'>,
    ChipClearButtonStylesProps {
  label: string
}

export const ChipClearButton = forwardRef<HTMLSpanElement, ChipClearButtonProps>(
  (
    {
      children = (
        <Icon className="opacity-dim-3">
          <DeleteFill />
        </Icon>
      ),
      tabIndex = 0,
      label,
    },
    forwardedRef
  ) => {
    const { design, disabled, onClear } = useChipContext()

    const onClearHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        !disabled && onClear && onClear(event)
      },
      [disabled, onClear]
    )

    return (
      <span
        className={chipClearButtonWrapperStyles({
          isBordered: design === 'dashed',
          disabled: !!disabled,
          design,
        })}
        onClick={onClearHandler}
        ref={forwardedRef}
      >
        <button
          tabIndex={tabIndex}
          type="button"
          disabled={!!disabled}
          className={chipClearButtonStyles({ disabled })}
          aria-label={label}
        >
          <Slot aria-label={label}>{children}</Slot>
        </button>
      </span>
    )
  }
)

ChipClearButton.displayName = 'Chip.ClearButton'
