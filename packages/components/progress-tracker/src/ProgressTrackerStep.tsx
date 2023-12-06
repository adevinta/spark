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
      readOnly,
    } = useProgressTrackerContext()

    const ID = useId()
    const stepId = `step-${ID}`
    const stepIndex = [...steps].findIndex(step => step.id === stepId)

    const [progressState, setProgressState] = useState<'active' | 'complete' | undefined>()

    useEffect(
      () => setSteps(steps => steps.add({ id: stepId, disabled })),
      [disabled, stepId, setSteps]
    )

    useEffect(() => {
      if (stepIndex === activeStepIndex) {
        setProgressState('active')
      } else if (stepIndex < activeStepIndex) {
        setProgressState('complete')
      } else {
        setProgressState(undefined)
      }
    }, [activeStepIndex, stepIndex])

    return (
      <li
        id={stepId}
        ref={ref}
        data-state={progressState}
        aria-current={progressState === 'active'}
        className={stepItemVariant({
          size,
          disabled,
          disabledBefore: !![...steps][stepIndex - 1]?.disabled,
          disabledAfter: !![...steps][stepIndex + 1]?.disabled,
        })}
        {...rest}
      >
        <button
          type="button"
          // {...(!disabled || !readonly) && ({})}
          {...(!disabled &&
            !readOnly && {
              onClick: () => onStepClick(stepId),
            })}
          disabled={disabled}
          className={stepButtonVariant({
            complete: progressState === 'complete',
            active: progressState === 'active',
            disabled,
            readOnly,
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
