import { Slot } from '@spark-ui/slot'
import { useCombinedState } from '@spark-ui/use-combined-state'
import React from 'react'

export const useChipElement = ({
  onClick,
  onClose,
  asChild,
  pressed,
  defaultPressed,
  disabled,
}: {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    args: { pressed: boolean }
  ) => void
  onClose?: React.MouseEventHandler<HTMLSpanElement>
  asChild?: boolean
  pressed?: boolean
  defaultPressed?: boolean
  disabled: boolean | null
}): {
  Element:
    | React.ForwardRefExoticComponent<
        React.HTMLAttributes<HTMLElement> & {
          children?: React.ReactNode
        } & React.RefAttributes<HTMLElement>
      >
    | React.ElementType
  chipProps:
    | {
        type: 'button'
        'aria-pressed'?: boolean
        'data-state'?: 'on' | 'off'
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
        disabled?: true
      }
    | {
        'aria-disabled'?: true
      }
  closeIconProps: {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
} => {
  const [isPressed, setIsPressed] = useCombinedState<boolean | undefined>(pressed, defaultPressed)
  const onCloseHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onClose && onClose(event)
  }
  const closeIconProps = {
    ...(onClose && !disabled && { onClick: onCloseHandler }),
    type: 'button',
  }
  const isButton = onClick || isPressed
  if (isButton) {
    return {
      Element: asChild ? Slot : 'button',
      chipProps: {
        type: 'button',
        ...(isPressed !== undefined && {
          'aria-pressed': isPressed,
          'data-state': isPressed ? 'on' : 'off',
        }),
        onClick: (event: React.MouseEvent<HTMLButtonElement>): void => {
          setIsPressed(!isPressed)
          onClick && onClick(event, { pressed: isPressed as boolean })
        },
        ...(disabled && { disabled: true }),
      },
      closeIconProps,
    }
  }

  return {
    Element: asChild ? Slot : 'div',
    chipProps: {
      ...(disabled && { 'aria-disabled': true }),
    },
    closeIconProps,
  }
}
