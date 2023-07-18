import { Icon } from '@spark-ui/icon'
import { DeleteFill } from '@spark-ui/icons/dist/icons/DeleteFill'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, MouseEventHandler } from 'react'

import { useInputGroup } from './InputGroupContext'

export interface InputClearButtonProps extends ComponentPropsWithoutRef<'button'> {
  'aria-label': string
}

export const InputClearButton = forwardRef<HTMLButtonElement, InputClearButtonProps>(
  ({ className, tabIndex = -1, onClick, ...others }, ref) => {
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
      <button
        ref={ref}
        className={cx(
          className,
          'absolute top-1/2 -translate-y-1/2 pointer-events-auto',
          'inline-flex items-center justify-center h-full outline-none',
          'text-neutral hover:text-neutral-hovered',
          hasTrailingIcon ? 'right-3xl px-[var(--sz-12)]' : 'right-none pr-lg pl-md'
        )}
        tabIndex={tabIndex}
        onClick={handleClick}
        {...others}
      >
        <Icon size="sm">
          <DeleteFill />
        </Icon>
      </button>
    )
  }
)

InputClearButton.displayName = 'InputGroup.ClearButton'
