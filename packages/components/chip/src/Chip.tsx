import { Icon } from '@spark-ui/icon'
import { DeleteFill } from '@spark-ui/icons/dist/icons/DeleteFill'
import React, { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react'

import {
  chipCloseStyles,
  chipContentStyles,
  chipContentTextStyles,
  chipIconStyles,
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
      ...otherProps
    },
    forwardedRef
  ) => {
    const {
      Element: ChipElement,
      chipProps,
      closeIconProps,
    } = useChipElement({
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
        })}
        {...{
          ...chipProps,
          ...otherProps,
        }}
        data-spark-component="chip"
      >
        <span
          className={chipContentStyles({
            isBordered: design === 'dashed' ? 'yes' : 'no',
            hasCloseIcon: onClose ? 'yes' : 'no',
          })}
        >
          {children && <span className={chipContentTextStyles({})}>{children}</span>}
          {onClose && (
            <span
              className={chipCloseStyles({
                isBordered: design === 'dashed' ? 'yes' : 'no',
                cursor: disabled ? 'disabled' : 'pointer',
              })}
              {...closeIconProps}
            >
              <div
                role="button"
                aria-disabled={!!disabled}
                {...(!disabled && { tabIndex: 0 })}
                className={chipIconStyles({ cursor: disabled ? 'disabled' : 'pointer' })}
              >
                <Icon label="close" className="opacity-dim-3">
                  <DeleteFill />
                </Icon>
              </div>
            </span>
          )}
        </span>
      </ChipElement>
    )
  }
)
