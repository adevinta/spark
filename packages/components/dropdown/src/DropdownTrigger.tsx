import { Popover } from '@spark-ui/popover'
import { Fragment } from 'react'

import { useDropdown } from './DropdownContext'

export const Trigger = () => {
  const { isOpen, selectedItem, getToggleButtonProps, hasPopover } = useDropdown()

  const [WrapperComponent, wrapperProps] = hasPopover
    ? [Popover.Trigger, { asChild: true }]
    : [Fragment, {}]

  return (
    <WrapperComponent {...wrapperProps}>
      <div
        className="flex w-sz-288 cursor-pointer justify-between rounded-sm border-sm border-outline bg-surface p-sm"
        {...getToggleButtonProps()}
      >
        <span>{selectedItem ? selectedItem.text : 'Best book ever'}</span>
        <span className="px-sm">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
      </div>
    </WrapperComponent>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Dropdown.Trigger'
