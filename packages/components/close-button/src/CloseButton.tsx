import { ButtonStylesProps } from '@spark-ui/button/src/Button.styles'
import { Icon } from '@spark-ui/icon'
import { DeleteFill } from '@spark-ui/icons/dist/icons/DeleteFill'
import React, { forwardRef, PropsWithChildren, useCallback, useRef } from 'react'

import { closeButtonIconStyles, closeButtonStyles } from './CloseButton.styles'

export interface CloseButtonProps
  extends PropsWithChildren<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>>,
    ButtonStylesProps {
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLSpanElement>
  label?: string
}

export const CloseButton = forwardRef<HTMLSpanElement, PropsWithChildren<CloseButtonProps>>(
  (
    { disabled, onClick, className, label = 'close', children = <DeleteFill />, ...props },
    forwardedRef
  ) => {
    const buttonRef = useRef<HTMLDivElement>(null)
    const onCloseHandler = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onClick && onClick(event)
      },
      [onClick]
    )

    const onKeyUpHandler = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
      ;['Enter'].includes(event.key) && buttonRef.current?.click()
    }, [])

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
        <div
          ref={buttonRef}
          role="button"
          {...(disabled ? { 'aria-disabled': disabled } : { tabIndex: 0 })}
          onKeyUp={onKeyUpHandler}
          className={closeButtonIconStyles({ cursor: disabled ? 'disabled' : 'pointer' })}
        >
          <Icon label={label} className="opacity-dim-3">
            {children}
          </Icon>
        </div>
      </span>
    )
  }
)
