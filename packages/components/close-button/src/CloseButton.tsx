import { ButtonStylesProps } from '@spark-ui/button/src/Button.styles'
import { Icon } from '@spark-ui/icon'
import { DeleteFill } from '@spark-ui/icons/dist/icons/DeleteFill'
import { Slot } from '@spark-ui/slot'
import React, {
  ButtonHTMLAttributes,
  forwardRef,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useRef,
} from 'react'

import { closeButtonIconStyles, closeButtonStyles } from './CloseButton.styles'

export interface CloseButtonProps
  extends PropsWithChildren<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>>,
    ButtonStylesProps {
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLSpanElement>
  label?: string
  children?: ReactNode
}

export const CloseButton = forwardRef<HTMLSpanElement, PropsWithChildren<CloseButtonProps>>(
  (
    {
      disabled,
      onClick,
      className,
      label,
      children = (
        <Icon>
          <DeleteFill />
        </Icon>
      ),
      ...props
    },
    forwardedRef
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const onCloseHandler = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onClick && onClick(event)
      },
      [onClick]
    )

    return (
      <span
        ref={forwardedRef}
        className={closeButtonStyles({
          cursor: disabled ? 'disabled' : 'pointer',
          className,
        })}
        onClick={onCloseHandler}
        {...props}
      >
        <button
          ref={buttonRef}
          className={closeButtonIconStyles({ cursor: disabled ? 'disabled' : 'pointer' })}
          {...(disabled && { 'aria-disabled': disabled })}
        >
          <Slot aria-label={label} className={'text-neutral'}>
            {children}
          </Slot>
        </button>
      </span>
    )
  }
)
