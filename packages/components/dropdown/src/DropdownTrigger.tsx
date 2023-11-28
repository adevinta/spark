import { Popover } from '@spark-ui/popover'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cx } from 'class-variance-authority'
import { Fragment, ReactNode } from 'react'

import { useDropdown } from './DropdownContext'

interface TriggerProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

export const Trigger = ({ 'aria-label': ariaLabel, children, className }: TriggerProps) => {
  const { isOpen, getToggleButtonProps, getLabelProps, hasPopover } = useDropdown()

  const [WrapperComponent, wrapperProps] = hasPopover
    ? [Popover.Trigger, { asChild: true }]
    : [Fragment, {}]

  return (
    <>
      {ariaLabel && (
        <VisuallyHidden>
          <label {...getLabelProps()}>{ariaLabel}</label>
        </VisuallyHidden>
      )}
      <WrapperComponent {...wrapperProps}>
        <button
          type="button"
          className={cx(
            'flex w-sz-288 cursor-pointer justify-between rounded-sm border-sm border-outline bg-surface p-sm',
            className
          )}
          {...getToggleButtonProps()}
        >
          {children}
          <span className="px-sm">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </button>
      </WrapperComponent>
    </>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Dropdown.Trigger'
