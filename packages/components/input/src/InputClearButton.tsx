import { Icon } from '@spark-ui/icon'
import { IconButton, IconButtonProps } from '@spark-ui/icon-button'
import { DeleteOutline } from '@spark-ui/icons/dist/icons/DeleteOutline'
import { cx } from 'class-variance-authority'
import { forwardRef, MouseEventHandler } from 'react'

import { useInputGroup } from './InputGroupContext'

export type InputClearButtonProps = IconButtonProps

export const InputClearButton = forwardRef<HTMLButtonElement, InputClearButtonProps>(
  (
    {
      className,
      intent = 'neutral',
      design = 'ghost',
      size = 'sm',
      tabIndex = -1,
      onClick,
      ...others
    },
    ref
  ) => {
    const { onClear, hasTrailingIcon } = useInputGroup()

    const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
      if (onClick) {
        onClick(event)
      }

      if (onClear) {
        onClear()
      }
    }

    return (
      <IconButton
        ref={ref}
        className={cx(
          className,
          'absolute top-1/2 -translate-y-1/2 pointer-events-auto',
          hasTrailingIcon ? 'right-3xl' : 'right-md'
        )}
        tabIndex={tabIndex}
        intent={intent}
        design={design}
        size={size}
        onClick={handleClick}
        {...others}
      >
        <Icon size="sm">
          <DeleteOutline />
        </Icon>
      </IconButton>
    )
  }
)

InputClearButton.displayName = 'InputGroup.ClearButton'
