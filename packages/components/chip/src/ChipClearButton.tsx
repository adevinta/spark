import { Icon } from '@spark-ui/icon'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import React, { cloneElement, ComponentPropsWithoutRef, RefObject, useCallback } from 'react'

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
  ref?: RefObject<HTMLSpanElement>
}

export const ChipClearButton = ({
  children = (
    <Icon>
      <Close />
    </Icon>
  ),
  tabIndex = 0,
  label,
  ref: forwardedRef,
}: ChipClearButtonProps) => {
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
        isBordered: ['outline', 'dashed'].includes(`${design}`),
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
        {children &&
          cloneElement(children as React.ReactElement<HTMLElement>, { ariaLabel: label })}
      </button>
    </span>
  )
}

ChipClearButton.displayName = 'Chip.ClearButton'
