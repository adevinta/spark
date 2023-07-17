import React, {
  ButtonHTMLAttributes,
  Children,
  FC,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react'

import { chipStyles, type ChipStylesProps } from './Chip.styles'
import { ChipContent } from './ChipContent'
import { ChipContext } from './useChipContext'
import { useChipElement } from './useChipElement'

const getDisplayName = (element?: ReactElement) => {
  return element ? (element.type as FC).displayName : ''
}

const findElement =
  (children: React.ReactNode) =>
  (...values: string[]) => {
    const validChildren = Children.toArray(children).filter(isValidElement)

    return validChildren.find(child => values.includes(getDisplayName(child) || ''))
  }

export interface ChipProps
  extends PropsWithChildren<
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>
    >,
    ChipStylesProps {
  /**
   * Configures a toggleButton aria-pressed initial value
   */
  defaultPressed?: boolean
  /**
   * Configures a toggleButton aria-pressed value
   */
  pressed?: boolean
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean
  /**
   * event handler fired each clicking event
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    args: { pressed: boolean }
  ) => void
  onClose?: React.MouseEventHandler<HTMLSpanElement>
}

export const Chip = forwardRef<HTMLButtonElement | HTMLDivElement, ChipProps>(
  (
    {
      design = 'outlined',
      disabled,
      children,
      intent = 'primary',
      defaultPressed,
      pressed,
      asChild,
      className,
      onClick,
      ...otherProps
    },
    forwardedRef
  ) => {
    const { Element: ChipElement, chipProps } = useChipElement({
      asChild,
      pressed,
      defaultPressed,
      onClick,
      disabled: !!disabled,
    })

    const findChipElement = findElement(children)

    const hasClearButton = findChipElement('Chip.ClearButton')
    const hasContent = findChipElement('Chip.Content')

    const Content = hasContent ? Fragment : ChipContent

    return (
      <ChipContext.Provider value={{ disabled, design, intent }}>
        <ChipElement
          ref={forwardedRef}
          className={chipStyles({
            className,
            design,
            disabled,
            intent,
            hasClearButton: !!hasClearButton,
          })}
          {...{
            ...chipProps,
            ...otherProps,
          }}
          data-spark-component="chip"
        >
          <Content>{children}</Content>
        </ChipElement>
      </ChipContext.Provider>
    )
  }
)

Chip.displayName = 'Chip'
