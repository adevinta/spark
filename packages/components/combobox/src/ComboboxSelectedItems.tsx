import { Icon } from '@spark-ui/icon'
import { Close } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'

import { useComboboxContext } from './ComboboxContext'

export const SelectedItems = () => {
  const ctx = useComboboxContext()

  if (!ctx.selectedItems.length) {
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

        return (
          <span
            data-spark-component="combobox-selected-items"
            key={`selected-item-${index}`}
            className={cx(
              'flex items-center rounded-sm bg-neutral-container text-on-neutral-container',
              { 'px-md': !isCleanable, 'pl-md': isCleanable }
            )}
            {...selectedItemProps}
            tabIndex={-1}
          >
            {selectedItemForRender.text}
            {ctx.disabled}
            {isCleanable && (
              <button
                type="button"
                tabIndex={-1}
                aria-hidden
                className="h-full cursor-pointer rounded-r-sm bg-neutral-container px-md"
                onClick={e => {
                  e.stopPropagation()

                  const updatedSelectedItems = ctx.selectedItems.filter(
                    item => item.value !== selectedItemForRender.value
                  )

                  ctx.setSelectedItems(updatedSelectedItems)

                  if (ctx.innerInputRef.current) {
                    ctx.innerInputRef.current.focus()
                  }
                }}
              >
                <Icon size="sm">
                  <Close />
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
