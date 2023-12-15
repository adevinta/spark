import { Icon } from '@spark-ui/icon'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { useProgressTrackerContext, useProgressTrackerStepContext } from './ProgressTrackerContext'
import { stepIndicatorVariant } from './ProgressTrackerStepIndicator.styles'

type ProgressTrackerStepIndicatorProps = ComponentPropsWithoutRef<'span'> & {
  /**
   * The content to be rendered when step status is complete (checkmark icon by default)
   */
  complete?: ReactNode
  /**
   * The content to be rendered when step status is incomplete (step index by default)
   */
  incomplete?: ReactNode
}

export const ProgressTrackerStepIndicator = ({
  complete,
  incomplete,
  className,
}: ProgressTrackerStepIndicatorProps) => {
  const { size, intent, design } = useProgressTrackerContext()
  const { index, state } = useProgressTrackerStepContext()

  return (
    <span className={stepIndicatorVariant({ size, intent, design, state, className })}>
      {size !== 'sm' && (
        <>
          {state === 'complete' ? (
            <>
              {complete === undefined ? (
                <Icon size="sm">
                  <Check />
                </Icon>
              ) : (
                complete
              )}
            </>
          ) : (
            <>{incomplete === undefined ? index + 1 : incomplete}</>
          )}
        </>
      )}
    </span>
  )
}

ProgressTrackerStepIndicator.displayName = 'ProgressTracker.StepIndicator'
