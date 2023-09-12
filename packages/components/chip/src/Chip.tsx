import React, { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react'

import { chipStyles, type ChipStylesProps } from './Chip.styles'
import { ChipContext } from './useChipContext'
import { useChipElement } from './useChipElement'

export interface ChipProps
  extends PropsWithChildren<
      Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>
    >,
    Omit<ChipStylesProps, 'hasClearButton'> {
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
    args: { pressed: boolean; value?: number | string | readonly string[] }
  ) => void
  /**
   * Clear chip handler
   */
  onClear?: (event?: React.MouseEvent<HTMLButtonElement>) => void
}

export const Chip = forwardRef<HTMLButtonElement | HTMLDivElement, ChipProps>(
  (
    {
      design = 'outlined',
      disabled,
      children,
      intent = 'basic',
      defaultPressed,
      pressed,
      asChild,
      className,
      onClick,
      onClear,
      ...otherProps
    },
    forwardedRef
  ) => {
    const {
      Element: ChipElement,
      chipProps: { children: formattedChildren, ...chipProps },
      compoundElements,
    } = useChipElement({
      asChild,
      pressed,
      defaultPressed,
      onClick,
      disabled: !!disabled,
      value: otherProps.value,
      defaultValue: otherProps.defaultValue,
      children,
      onClear,
    })

    const { clearButton } = compoundElements

    return (
      <ChipContext.Provider value={{ disabled, design, intent, onClear }}>
        <ChipElement
          ref={forwardedRef}
          className={chipStyles({
            className,
            design,
            disabled,
            intent,
            hasClearButton: !!clearButton,
          })}
          {...{
            ...chipProps,
            ...otherProps,
          }}
          data-spark-component="chip"
        >
          {formattedChildren}
        </ChipElement>
      </ChipContext.Provider>
    )
  }
)

Chip.displayName = 'Chip'
