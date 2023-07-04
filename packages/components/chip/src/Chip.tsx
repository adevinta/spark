import React, {
  ButtonHTMLAttributes,
  Children,
  FC,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react'

import { chipContentStyles, chipStyles, type ChipStylesProps } from './Chip.styles'
import { ChipContext } from './useChipContext'
import { useChipElement } from './useChipElement'

const getDisplayName = (element?: ReactElement) => {
  return element ? (element.type as FC).displayName : ''
}

const findElement =
  (...values: string[]) =>
  (children: React.ReactNode) => {
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

    const hasClearButton = findElement('Chip.ClearButton')(children)

    return (
      <ChipElement
        ref={forwardedRef}
        className={chipStyles({
          className,
          design,
          disabled,
          intent,
        })}
        {...{
          ...chipProps,
          ...otherProps,
        }}
        data-spark-component="chip"
      >
        <span className={chipContentStyles({ hasClearButton: !!hasClearButton })}>
          <ChipContext.Provider value={{ disabled, design, intent }}>
            {children}
          </ChipContext.Provider>
        </span>
      </ChipElement>
    )
  }
)

Chip.displayName = 'Chip'
