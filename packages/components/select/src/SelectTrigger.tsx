import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { forwardRef, ReactNode, type Ref, useEffect } from 'react'

import { useSelectContext } from './SelectContext'
import { styles } from './SelectTrigger.styles'

interface TriggerProps {
  'aria-label'?: string
  children: ReactNode
  className?: string
}

/**
 * This trigger acts as a fake button for the `select` tag.
 * It is not interactive.
 */
export const Trigger = forwardRef(
  (
    { 'aria-label': ariaLabel, children, className }: TriggerProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const { disabled, readOnly, state, setAriaLabel, itemsComponent } = useSelectContext()

    useEffect(() => {
      if (ariaLabel) {
        setAriaLabel(ariaLabel)
      }
    }, [ariaLabel])

    return (
      <div
        data-spark-component="select-trigger"
        ref={forwardedRef}
        className={styles({ className, state, disabled, readOnly })}
      >
        <span className="flex items-center justify-start gap-md">{children}</span>

        <Icon className="ml-md shrink-0" size="sm">
          <ArrowHorizontalDown />
        </Icon>

        {itemsComponent}
      </div>
    )
  }
)

Trigger.displayName = 'Select.Trigger'
