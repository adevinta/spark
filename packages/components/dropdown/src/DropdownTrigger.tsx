import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons'
import { Popover } from '@spark-ui/popover'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cx } from 'class-variance-authority'
import { forwardRef, Fragment, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'

interface TriggerProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

export const Trigger = forwardRef(
  (
    { 'aria-label': ariaLabel, children, className }: TriggerProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    const { getToggleButtonProps, getDropdownProps, getLabelProps, hasPopover } =
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
            ref={forwardedRef}
            type="button"
            className={cx(
              'flex w-full cursor-pointer items-center justify-between',
              'min-h-sz-44 rounded-lg border-sm border-outline bg-surface px-lg',
              className
            )}
            data-spark-component="dropdown-trigger"
            {...getToggleButtonProps(getDropdownProps())}
          >
            <span className="flex items-center justify-start gap-md">{children}</span>

            <Icon className="ml-md shrink-0" size="sm">
              <ArrowHorizontalDown />
            </Icon>
          </button>
        </WrapperComponent>
      </>
    )
  }
)

Trigger.displayName = 'Dropdown.Trigger'
