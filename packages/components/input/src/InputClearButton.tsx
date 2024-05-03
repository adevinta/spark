import { Icon } from '@spark-ui/icon'
import { DeleteOutline } from '@spark-ui/icons/dist/icons/DeleteOutline'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, MouseEventHandler } from 'react'

import { useInputGroup } from './InputGroupContext'

export interface InputClearButtonProps extends ComponentPropsWithoutRef<'button'> {
  'aria-label': string
}

const Root = forwardRef<HTMLButtonElement, InputClearButtonProps>(
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
          'pointer-events-auto absolute top-1/2 -translate-y-1/2',
          'inline-flex h-full items-center justify-center outline-none',
          'text-neutral hover:text-neutral-hovered',
          hasTrailingIcon ? 'right-3xl px-[var(--sz-12)]' : 'right-none pl-md pr-lg'
        )}
        tabIndex={tabIndex}
        onClick={handleClick}
        type="button"
        {...others}
      >
        <Icon size="sm">
          <DeleteOutline />
        </Icon>
      </button>
    )
  }
)

export const InputClearButton = Object.assign(Root, {
  id: 'ClearButton',
})

InputClearButton.displayName = 'InputGroup.ClearButton'
