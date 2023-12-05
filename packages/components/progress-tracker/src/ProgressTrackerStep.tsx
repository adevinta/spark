import { type ComponentPropsWithoutRef, forwardRef, useEffect, useId, useState } from 'react'

import { useProgressTrackerContext } from './ProgressTrackerContext'
import { stepButtonVariant, stepItemVariant } from './ProgressTrackerStep.styles'

export type ProgressTrackerStepProps = ComponentPropsWithoutRef<'li'> & {
  label?: string
  disabled?: boolean
}

export const ProgressTrackerStep = forwardRef<HTMLLIElement, ProgressTrackerStepProps>(
  ({ label, disabled = false, className, ...rest }, ref) => {
    const {
      stepIndex: activeStepIndex,
      steps,
      onStepClick,
      setSteps,
      size,
    } = useProgressTrackerContext()

    const ID = useId()
    const stepId = `step-${ID}`

    const [progressState, setProgressState] = useState<
      'active' | 'complete' | 'disabled' | undefined
    >(() => (disabled ? 'disabled' : undefined))

    useEffect(() => setSteps(steps => steps.add(stepId)), [])

    useEffect(() => {
      if ([...steps].indexOf(stepId) === activeStepIndex) {
        setProgressState('active')
      } else if ([...steps].indexOf(stepId) < activeStepIndex) {
        setProgressState('complete')
      } else {
        setProgressState(undefined)
      }
    }, [activeStepIndex, steps, stepId])

    return (
      <li
        id={stepId}
        ref={ref}
        data-state={progressState}
        className={stepItemVariant({ size })}
        {...rest}
      >
        <button
          type="button"
          onClick={() => onStepClick(stepId)}
          disabled={progressState === 'disabled'}
          className={stepButtonVariant({
            complete: progressState === 'complete',
            active: progressState === 'active',
            disabled: progressState === 'disabled',
            size,
            className,
          })}
        >
          {label && <span className="block text-body-2 font-bold text-on-surface">{label}</span>}
        </button>
      </li>
    )
  }
)
