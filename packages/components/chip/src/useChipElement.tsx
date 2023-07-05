import { Slot } from '@spark-ui/slot'
import { useCombinedState } from '@spark-ui/use-combined-state'
import React from 'react'

interface ReturnedValue {
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
        disabled?: boolean
      }
    | {
        'aria-disabled'?: boolean
      }
}

export const useChipElement = ({
  onClick,
  asChild,
  pressed,
  defaultPressed,
  disabled,
}: {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    args: { pressed: boolean }
  ) => void
  asChild?: boolean
  pressed?: boolean
  defaultPressed?: boolean
  disabled?: boolean
}): ReturnedValue => {
  const [isPressed, setIsPressed] = useCombinedState<boolean | undefined>(pressed, defaultPressed)

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
        disabled,
      },
    }
  }

  return {
    Element: asChild ? Slot : 'div',
    chipProps: {
      'aria-disabled': disabled,
    },
  }
}
