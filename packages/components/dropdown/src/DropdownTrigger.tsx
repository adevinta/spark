import { Popover } from '@spark-ui/popover'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cx } from 'class-variance-authority'
import { Fragment, ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'

interface TriggerProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

export const Trigger = ({ 'aria-label': ariaLabel, children, className }: TriggerProps) => {
  const { isOpen, getToggleButtonProps, getDropdownProps, getLabelProps, hasPopover } =
    useDropdownContext()

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
            'flex w-full cursor-pointer justify-between rounded-sm border-sm border-outline bg-surface p-sm',
            className
          )}
          {...getToggleButtonProps(getDropdownProps())}
        >
          <span className="flex items-center justify-start gap-sm">{children}</span>
          <span className="px-sm">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </button>
      </WrapperComponent>
    </>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Dropdown.Trigger'
