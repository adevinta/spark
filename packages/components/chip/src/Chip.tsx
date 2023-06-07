import { Icon } from '@spark-ui/icon'
import { DeleteFill } from '@spark-ui/icons/dist/icons/DeleteFill'
import React, { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react'

import {
  chipCloseStyles,
  chipContentStyles,
  chipContentTextStyles,
  chipStyles,
  type ChipStylesProps,
} from './Chip.styles'
import { useChipElement } from './useChipElement'

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
  /**
   * The default closing icon
   */
  closeIcon?: React.ReactElement
  /**
   * Trailing icon
   */
  icon?: React.ReactElement
}

export const Chip = forwardRef<HTMLButtonElement | HTMLDivElement, ChipProps>(
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
      onClick,
      onClose,
      closeIcon = <DeleteFill />,
      icon,
      ...otherProps
    },
    forwardedRef
  ) => {
    const [ChipElement, elementProps, closeIconProps] = useChipElement({
      asChild,
      pressed,
      defaultPressed,
      onClick,
      onClose,
      disabled,
    })

    return (
      <ChipElement
        ref={forwardedRef}
        className={chipStyles({
          className,
          design,
          disabled,
          intent,
          pressed: isPressed,
        })}
        {...{
          ...elementProps,
          ...otherProps,
        }}
        data-spark-component="chip"
      >
        <span className={chipContentStyles({})}>
          {icon && (
            <span>
              <Icon>{icon}</Icon>
            </span>
          )}
          {children && <span className={chipContentTextStyles({})}>{children}</span>}
          {onClose && (
            <span
              className={chipCloseStyles({ cursor: disabled ? 'disabled' : 'pointer' })}
              {...closeIconProps}
            >
              <Icon>{closeIcon}</Icon>
            </span>
          )}
        </span>
      </ChipElement>
    )
  }
)
