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
}): [
  (
    | React.ForwardRefExoticComponent<
        React.HTMLAttributes<HTMLElement> & {
          children?: React.ReactNode
        } & React.RefAttributes<HTMLElement>
      >
    | React.ElementType
  ),
  (
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
  ),
  {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  }
] => {
  const [isPressed, setIsPressed] = useCombinedState<boolean | undefined>(pressed, defaultPressed)
  const onCloseHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    onClose && onClose(event)
  }
  const closeIconProps = {
    ...(onClose && !disabled && { onClick: onCloseHandler }),
  }
  const isButton = onClick || isPressed
  if (isButton) {
    return [
      asChild ? Slot : 'button',
      {
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
    ]
  }

  return [
    asChild ? Slot : 'div',
    {
      ...(disabled && { 'aria-disabled': true }),
    },
    closeIconProps,
  ]
}
