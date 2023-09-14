import { Icon } from '@spark-ui/icon'
import { DeleteOutline } from '@spark-ui/icons/dist/icons/DeleteOutline'
import React, { cloneElement, ComponentPropsWithoutRef, forwardRef, useCallback } from 'react'

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
        <Icon className="">
          <DeleteOutline />
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
          {children && cloneElement(children as React.ReactElement, { 'aria-label': label })}
        </button>
      </span>
    )
  }
)

ChipClearButton.displayName = 'Chip.ClearButton'
