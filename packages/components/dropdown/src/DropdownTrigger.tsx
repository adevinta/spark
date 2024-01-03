import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { Popover } from '@spark-ui/popover'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { cva } from 'class-variance-authority'
import { forwardRef, Fragment, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'
import { DropdownStateIndicator } from './DropdownStateIndicator'

interface TriggerProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

const styles = cva(
  [
    'flex w-full items-center justify-between',
    'min-h-sz-44 rounded-lg bg-surface text-on-surface px-lg',
    // outline styles
    'ring-1 outline-none ring-inset focus:ring-2',
  ],
  {
    variants: {
      state: {
        undefined: 'ring-outline focus:ring-outline-high',
        error: 'ring-error',
        alert: 'ring-alert',
        success: 'ring-success',
      },
      disabled: {
        true: 'disabled:bg-on-surface/dim-5 cursor-not-allowed text-on-surface/dim-3',
      },
    },
    compoundVariants: [
      {
        disabled: false,
        state: undefined,
        class: 'hover:ring-outline-high',
      },
    ],
  }
)

export const Trigger = forwardRef(
  (
    { 'aria-label': ariaLabel, children, className }: TriggerProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => {
    const {
      getToggleButtonProps,
      getDropdownProps,
      getLabelProps,
      hasPopover,
      disabled,
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
            ref={forwardedRef}
            disabled={disabled}
            className={styles({ className, state, disabled })}
            {...getToggleButtonProps({
              ...getDropdownProps(),
              onKeyDown: () => {
                setLastInteractionType('keyboard')
              },
            })}
            data-spark-component="dropdown-trigger"
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
)

Trigger.displayName = 'Dropdown.Trigger'
