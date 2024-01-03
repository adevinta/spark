import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { Popover } from '@spark-ui/popover'
import { VisuallyHidden } from '@spark-ui/visually-hidden'
import { forwardRef, Fragment, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'
import { DropdownStateIndicator } from './DropdownStateIndicator'
import { styles } from './DropdownTrigger.styles'

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
    const {
      getToggleButtonProps,
      getDropdownProps,
      getLabelProps,
      hasPopover,
      disabled,
      readOnly,
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
            disabled={disabled || readOnly}
            className={styles({ className, state, disabled, readOnly })}
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
