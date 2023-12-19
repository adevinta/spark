import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { Popover } from '@spark-ui/popover'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cva } from 'class-variance-authority'
import { Fragment, ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'
import { DropdownStateIndicator } from './DropdownStateIndicator'

interface TriggerProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

const styles = cva(
  [
    'flex w-full cursor-pointer items-center justify-between',
    'min-h-sz-44 rounded-lg bg-surface px-lg',
    // outline styles
    'ring-1 outline-none ring-inset focus:ring-2',
  ],
  {
    variants: {
      state: {
        undefined: 'ring-outline focus:ring-outline-high hover:ring-outline-high',
        error: 'ring-error',
        alert: 'ring-alert',
        success: 'ring-success',
      },
    },
  }
)

export const Trigger = ({ 'aria-label': ariaLabel, children, className }: TriggerProps) => {
  const {
    getToggleButtonProps,
    getDropdownProps,
    getLabelProps,
    hasPopover,
    state,
    setLastInteractionType,
  } = useDropdownContext()

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
          className={styles({ className, state })}
          {...getToggleButtonProps({
            ...getDropdownProps(),
            onKeyDown: () => {
              setLastInteractionType('keyboard')
            },
          })}
        >
          <span className="flex items-center justify-start gap-md">{children}</span>

          <div className="ml-md flex gap-lg">
            <DropdownStateIndicator />
            <Icon className="shrink-0" size="sm">
              <ArrowHorizontalDown />
            </Icon>
          </div>
        </button>
      </WrapperComponent>
    </>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Dropdown.Trigger'
