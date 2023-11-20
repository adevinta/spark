import { Popover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { useSelect } from 'downshift'

const books = [
  { id: 'book-1', title: 'To Kill a Mockingbird' },
  { id: 'book-2', title: 'War and Peace' },
  { id: 'book-3', title: 'The Idiot' },
  { id: 'book-4', title: 'A Picture of Dorian Gray' },
  { id: 'book-5', title: '1984' },
  { id: 'book-6', title: 'Pride and Prejudice' },
  { id: 'book-7', title: 'Meditations' },
  {
    id: 'book-8',
    title: 'The Brothers Karamazov',
  },
  { id: 'book-9', title: 'Anna Karenina' },
  { id: 'book-10', title: 'Crime and Punishment' },
]

interface DropdownItem {
  title: string
  id: string
}

/**
 *
 * NOTES
 *
 * - We won't use Downshift's getLabelProps method, because we already have our FormField component for this.
 * - We must investigate if Dropdown list should always be in the DOM like an html select tag would. If so, dialog `open` prop should remain true at all times.
 */

export const Dropdown = () => {
  function itemToString(item: DropdownItem | null) {
    return item ? item.title : ''
  }

  function Select() {
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items: books,
      // isItemDisabled: item => item.id === 'book-3',
      itemToString,
      // getA11yStatusMessage?: (options: A11yStatusMessageOptions<Item>) => string
      // getA11ySelectionMessage?: (options: A11yStatusMessageOptions<Item>) => string
      // highlightedIndex?: number
      // initialHighlightedIndex?: number
      // defaultHighlightedIndex?: number
      // isOpen?: boolean
      // initialIsOpen?: boolean
      // defaultIsOpen?: boolean
      // selectedItem?: Item | null
      // initialSelectedItem?: Item | null
      // defaultSelectedItem?: Item | null
      // id?: string
      // labelId?: string
      // menuId?: string
      // toggleButtonId?: string
      // getItemId?: (index: number) => string
      // scrollIntoView?: (node: HTMLElement, menuNode: HTMLElement) => void
      // stateReducer?: (
      //   state: UseSelectState<Item>,
      //   actionAndChanges: UseSelectStateChangeOptions<Item>,
      // ) => Partial<UseSelectState<Item>>
      // onSelectedItemChange?: (changes: UseSelectStateChange<Item>) => void
      // onIsOpenChange?: (changes: UseSelectStateChange<Item>) => void
      // onHighlightedIndexChange?: (changes: UseSelectStateChange<Item>) => void
      // onStateChange?: (changes: UseSelectStateChange<Item>) => void
      // environment?: Environment
    })

    return (
      <Popover open>
        <div>
          <Popover.Trigger asChild>
            <div
              className="flex w-sz-288 cursor-pointer justify-between rounded-sm border-sm border-outline bg-surface p-sm"
              {...getToggleButtonProps()}
            >
              <span>{selectedItem ? selectedItem.title : 'Best book ever'}</span>
              <span className="px-sm">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
            </div>
          </Popover.Trigger>

          <Popover.Content
            asChild
            {...getMenuProps()}
            matchTriggerWidth
            onOpenAutoFocus={e => e.preventDefault()}
          >
            <ul
              className={`flex max-h-sz-320 flex-col overflow-auto ${
                isOpen ? 'block' : 'pointer-events-none opacity-0'
              }`}
            >
              {books.map((item, index) => {
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
              })}
            </ul>
          </Popover.Content>
        </div>
      </Popover>
    )
  }

  return <Select />
}

Dropdown.displayName = 'Dropdown'
