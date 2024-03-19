import { Icon } from '@spark-ui/icon'
import { DeleteOutline } from '@spark-ui/icons/dist/icons/DeleteOutline'
import { cx } from 'class-variance-authority'

import { useComboboxContext } from './ComboboxContext'

export const SelectedItems = () => {
  const ctx = useComboboxContext()

  if (!ctx.selectedItems.length || !ctx.multiple) {
    return null
  }

  const isCleanable = !ctx.disabled && !ctx.readOnly

  return (
    <>
      {ctx.selectedItems.map((selectedItemForRender, index) => {
        const selectedItemProps = ctx.getSelectedItemProps({
          disabled: ctx.disabled || ctx.readOnly,
          selectedItem: selectedItemForRender,
          index,
        })

        const handleFocus = (e: React.FocusEvent<HTMLSpanElement>) => {
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
          <span
            role="presentation"
            data-spark-component="combobox-selected-item"
            key={`selected-item-${index}`}
            className={cx(
              'flex h-sz-28 items-center rounded-md bg-neutral-container align-middle',
              'text-body-2 text-on-neutral-container',
              { 'px-md': !isCleanable, 'pl-md': isCleanable }
            )}
            {...selectedItemProps}
            tabIndex={-1}
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
          </span>
        )
      })}
    </>
  )
}

SelectedItems.displayName = 'Combobox.SelectedItems'
