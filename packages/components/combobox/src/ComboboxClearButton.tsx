import { Icon } from '@spark-ui/icon'
import { DeleteFill } from '@spark-ui/icons/dist/icons/DeleteFill'
import { cx } from 'class-variance-authority'
import { ComponentPropsWithoutRef, forwardRef, MouseEventHandler } from 'react'

import { useComboboxContext } from './ComboboxContext'

export interface ClearButtonProps extends ComponentPropsWithoutRef<'button'> {
  'aria-label': string
}

export const ClearButton = forwardRef<HTMLButtonElement, ClearButtonProps>(
  ({ className, tabIndex = -1, onClick, ...others }, ref) => {
    const ctx = useComboboxContext()

    const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
      event.stopPropagation()

      ctx.multiple ? ctx.setSelectedItems([]) : ctx.selectItem(null)

      ctx.setInputValue('')

      if (ctx.innerInputRef.current) {
        ctx.innerInputRef.current.focus()
      }

      if (onClick) {
        onClick(event)
      }
    }

    return (
      <button
        ref={ref}
        className={cx(className, 'py-md text-neutral hover:text-neutral-hovered')}
        tabIndex={tabIndex}
        onClick={handleClick}
        type="button"
        {...others}
      >
        <Icon size="sm">
          <DeleteFill />
        </Icon>
      </button>
    )
  }
)

ClearButton.displayName = 'Combobox.ClearButton'
