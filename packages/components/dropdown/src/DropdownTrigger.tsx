import { Popover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { Fragment, ReactNode } from 'react'

import { useDropdown } from './DropdownContext'

interface TriggerProps {
  children: ReactNode
  className?: string
}

export const Trigger = ({ children, className }: TriggerProps) => {
  const { isOpen, getToggleButtonProps, hasPopover } = useDropdown()

  const [WrapperComponent, wrapperProps] = hasPopover
    ? [Popover.Trigger, { asChild: true }]
    : [Fragment, {}]

  return (
    <WrapperComponent {...wrapperProps}>
      <div
        className={cx(
          'flex w-sz-288 cursor-pointer justify-between rounded-sm border-sm border-outline bg-surface p-sm',
          className
        )}
        {...getToggleButtonProps()}
      >
        {children}
        <span className="px-sm">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
      </div>
    </WrapperComponent>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Dropdown.Trigger'
