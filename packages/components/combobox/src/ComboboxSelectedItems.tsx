import { Icon } from '@spark-ui/icon'
import { Close } from '@spark-ui/icons/dist/icons/Close'

import { useComboboxContext } from './ComboboxContext'

export const SelectedItems = () => {
  const ctx = useComboboxContext()

  if (!ctx.selectedItems.length) {
    return null
  }

  return (
    <>
      {ctx.selectedItems.map((selectedItemForRender, index) => {
        const selectedItemProps = ctx.getSelectedItemProps({
          selectedItem: selectedItemForRender,
          index,
        })

        return (
          <span
            data-spark-component="combobox-selected-items"
            key={`selected-item-${index}`}
            className="flex items-center rounded-sm bg-neutral-container pl-md text-on-neutral-container"
            {...selectedItemProps}
            tabIndex={-1}
          >
            {selectedItemForRender.text}
            <span
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
            </span>
          </span>
        )
      })}
    </>
  )
}

SelectedItems.displayName = 'Combobox.SelectedItems'
