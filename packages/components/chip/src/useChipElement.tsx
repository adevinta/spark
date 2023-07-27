import { Slot } from '@spark-ui/slot'
import { useCombinedState } from '@spark-ui/use-combined-state'
import React, { Children, FC, isValidElement, ReactElement } from 'react'

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
        children: React.ReactNode
      }
    | {
        'aria-disabled'?: boolean
        children: React.ReactNode
      }
  compoundElements: {
    leadingIcon: React.ReactNode
    content: React.ReactNode
    clearButton: React.ReactNode
  }
}

const getDisplayName = (element?: ReactElement) => {
  return element ? (element.type as FC).displayName : ''
}

const findElement =
  (children: React.ReactNode) =>
  (...values: string[]) => {
    const validChildren = Children.toArray(children).filter(isValidElement)

    return validChildren.find(child => {
      const displayName = getDisplayName(child)

      return values.includes(displayName || '')
    })
  }

export const useChipElement = ({
  onClick,
  asChild,
  pressed,
  defaultPressed,
  disabled,
  value,
  defaultValue,
  children,
}: {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    args: { pressed: boolean; value?: string | number | readonly string[] }
  ) => void
  asChild?: boolean
  pressed?: boolean
  defaultPressed?: boolean
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  disabled?: boolean
  children?: React.ReactNode
}): ReturnedValue => {
  const [isPressed, setIsPressed] = useCombinedState<boolean | undefined>(pressed, defaultPressed)
  const [innerValue] = useCombinedState<string | number | readonly string[] | undefined>(
    value,
    defaultValue
  )

  const findChipElement = findElement(children)

  const leadingIcon = findChipElement('Chip.LeadingIcon')
  const content = findChipElement('Chip.Content')
  const clearButton = findChipElement('Chip.ClearButton')

  const isButton = onClick || isPressed

  const formattedChildren = [leadingIcon, content, clearButton].every(
    element => element === undefined
  ) ? (
    <span className="inline-block grow truncate">{children}</span>
  ) : (
    <>
      {leadingIcon}
      {content}
      {clearButton}
    </>
  )

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
          onClick && onClick(event, { pressed: isPressed as boolean, value: innerValue })
        },
        disabled,
        children: formattedChildren,
      },
      compoundElements: {
        leadingIcon,
        content,
        clearButton,
      },
    }
  }

  return {
    Element: asChild ? Slot : 'div',
    chipProps: {
      'aria-disabled': disabled,
      children: formattedChildren,
    },
    compoundElements: {
      leadingIcon,
      content,
      clearButton,
    },
  }
}