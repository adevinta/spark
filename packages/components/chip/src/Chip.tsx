import { Slot } from '@spark-ui/slot'
import { useCombinedState } from '@spark-ui/use-combined-state'
import React, { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react'

import { chipStyles, type ChipStylesProps } from './Chip.styles'

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
}

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      design = 'outlined',
      disabled = false,
      children,
      intent = 'primary',
      defaultPressed,
      pressed,
      asChild,
      className,
      ...otherProps
    },
    forwardedRef
  ) => {
    const Component = asChild ? Slot : 'button'
    const [isPressed, setIsPressed] = useCombinedState(pressed, defaultPressed)
    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setIsPressed(!isPressed)
      otherProps.onClick && otherProps.onClick(event, { pressed: isPressed as boolean })
    }

    return (
      <Component
        type="button"
        ref={forwardedRef}
        className={chipStyles({
          className,
          design,
          disabled,
          intent,
        })}
        disabled={!!disabled}
        {...{
          ...(isPressed !== undefined && {
            'aria-pressed': isPressed,
            'data-state': isPressed ? 'on' : 'off',
          }),
          ...(disabled && { 'data-disabled': true }),
          ...otherProps,
        }}
        data-spark-component="chip"
        onClick={handleOnClick}
      >
        {children}
      </Component>
    )
  }
)
