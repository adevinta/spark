import { Icon } from '@spark-ui/icon'
import { DeleteOutline } from '@spark-ui/icons/dist/icons/DeleteOutline'
import { cx } from 'class-variance-authority'
import { FocusEvent } from 'react'

import { useComboboxContext } from './ComboboxContext'

export const SelectedItems = () => {
  const ctx = useComboboxContext()

  if (!ctx.selectedItems.length || !ctx.multiple) {
    return null
  }

  const isCleanable = !ctx.disabled && !ctx.readOnly

  const handleFocus = (e: FocusEvent<HTMLSpanElement>) => {
    const element = e.target as HTMLSpanElement
    if (ctx.lastInteractionType === 'keyboard') {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      })
    }
  }

  return (
    <>
      {ctx.selectedItems.map((selectedItemForRender, index) => {
        const { disabled, ...selectedItemProps } = ctx.getSelectedItemProps({
          disabled: ctx.disabled || ctx.readOnly,
          selectedItem: selectedItemForRender,
          index,
        })

        const Element = disabled ? 'button' : 'span'

        return (
          <Element
            role="presentation"
            data-spark-component="combobox-selected-item"
            key={`selected-item-${index}`}
            className={cx(
              'flex h-sz-28 items-center rounded-md bg-neutral-container align-middle disabled:cursor-not-allowed',
              'text-body-2 text-on-neutral-container',
              { 'px-md': !isCleanable, 'pl-md': isCleanable }
            )}
            {...selectedItemProps}
            tabIndex={-1}
            {...(disabled && { disabled: true })}
            onFocus={handleFocus}
          >
            <span
              className={cx(
                'line-clamp-1 overflow-x-hidden text-ellipsis break-all leading-normal',
                { 'w-max': !ctx.wrap }
              )}
            >
              {selectedItemForRender.text}
            </span>
            {ctx.disabled}
            {isCleanable && (
              <button
                type="button"
                tabIndex={-1}
                aria-hidden
                className="h-full cursor-pointer px-md"
                onClick={e => {
                  e.stopPropagation()

                  const updatedSelectedItems = ctx.selectedItems.filter(
                    item => item.value !== selectedItemForRender.value
                  )

                  ctx.setSelectedItems(updatedSelectedItems)

                  if (ctx.innerInputRef.current) {
                    ctx.innerInputRef.current.focus({ preventScroll: true })
                  }
                }}
              >
                <Icon size="sm">
                  <DeleteOutline />
                </Icon>
              </button>
            )}
          </Element>
        )
      })}
    </>
  )
}

SelectedItems.displayName = 'Combobox.SelectedItems'
