import { Icon } from '@spark-ui/icon'
import { DeleteOutline } from '@spark-ui/icons/dist/icons/DeleteOutline'
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

      if (ctx.multiple) {
        ctx.setSelectedItems([])
      } else {
        ctx.selectItem(null)
      }

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
        className={cx(className, 'h-sz-44 text-neutral hover:text-neutral-hovered')}
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

ClearButton.displayName = 'Combobox.ClearButton'
