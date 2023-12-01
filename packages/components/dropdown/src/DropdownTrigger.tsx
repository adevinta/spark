import { Popover } from '@spark-ui/popover'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cx } from 'class-variance-authority'
import { Fragment, ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'
import { findElement } from './utils'

interface TriggerProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

export const Trigger = ({ 'aria-label': ariaLabel, children, className }: TriggerProps) => {
  const { isOpen, getToggleButtonProps, getLabelProps, hasPopover } = useDropdownContext()

  const [WrapperComponent, wrapperProps] = hasPopover
    ? [Popover.Trigger, { asChild: true }]
    : [Fragment, {}]

  const finder = findElement(children)
  const leadingIcon = finder('LeadingIcon')
  const value = finder('Value')

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
          <span className="flex items-center justify-start gap-sm">
            {leadingIcon}
            {value}
          </span>
          <span className="px-sm">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </button>
      </WrapperComponent>
    </>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Dropdown.Trigger'
