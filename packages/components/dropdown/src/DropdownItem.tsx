import { cx } from 'class-variance-authority'

import { type DropdownItem, useDropdown } from './DropdownContext'

export const Item = ({ index, item }: { index: number; item: DropdownItem }) => {
  const { selectedItem, highlightedIndex, getItemProps } = useDropdown()

  return (
    <li
      className={cx(
        highlightedIndex === index && 'bg-basic-container',
        selectedItem === item && 'font-bold',

        'flex flex-col px-sm py-sm'
      )}
      key={item.id}
      {...getItemProps({ item, index })}
    >
      <span>{item.title}</span>
    </li>
  )
}

Item.id = 'Item'
Item.displayName = 'Dropdown.Item'
