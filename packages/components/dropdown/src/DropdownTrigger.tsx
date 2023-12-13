import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { Popover } from '@spark-ui/popover'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cx } from 'class-variance-authority'
import { forwardRef, Fragment, ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'

interface TriggerProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

export const Trigger = forwardRef(
  ({ 'aria-label': ariaLabel, children, className }: TriggerProps, ref) => {
    const { getToggleButtonProps, getDropdownProps, getLabelProps, hasPopover } =
      useDropdownContext()

    const [WrapperComponent, wrapperProps] = hasPopover
      ? [Popover.Trigger, { asChild: true }]
      : [Fragment, {}]

    return (
      <WrapperComponent {...wrapperProps}>
        <button
          type="button"
          ref={ref}
          className={cx(
            'flex cursor-pointer items-center justify-between',
            'min-h-sz-44 rounded-lg border-sm border-outline bg-surface px-lg',
            className
          )}
          {...getToggleButtonProps(getDropdownProps())}
        >
          {ariaLabel && (
            <VisuallyHidden>
              <label {...getLabelProps()}>{ariaLabel}</label>
            </VisuallyHidden>
          )}
          <span className="flex items-center justify-start gap-md">{children}</span>

          <Icon className="ml-md shrink-0" size="sm">
            <ArrowHorizontalDown />
          </Icon>
        </button>
      </WrapperComponent>
    )
  }
)

Trigger.id = 'Trigger'
Trigger.displayName = 'Dropdown.Trigger'
