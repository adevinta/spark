import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react'

import { useProgressTrackerContext } from './ProgressTrackerContext'
import { stepButtonVariant, stepItemVariant } from './ProgressTrackerStep.styles'

export type ProgressTrackerStepProps = ComponentPropsWithoutRef<'li'> & {
  label?: ReactNode
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
      orientation,
      readOnly,
    } = useProgressTrackerContext()

    const ID = useId()
    const stepId = `step-${ID}`
    const stepIndex = [...steps.keys()].indexOf(stepId)

    const disabledAfter = useMemo(() => {
      const nextStepId = [...steps.keys()][stepIndex + 1]

      return !!(nextStepId && steps.get(nextStepId)?.includes('disabled'))
    }, [steps, stepIndex])

    const [progressState, setProgressState] = useState<'active' | 'complete' | 'incomplete'>(
      'incomplete'
    )

    useEffect(() => {
      setSteps(steps => steps.set(stepId, [progressState, disabled ? 'disabled' : '']))
    }, [disabled, stepId, setSteps, progressState])

    useEffect(() => {
      if (stepIndex === activeStepIndex) {
        setProgressState('active')
      } else if (stepIndex < activeStepIndex) {
        setProgressState('complete')
      } else {
        setProgressState('incomplete')
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
          orientation,
          disabled,
          disabledAfter,
        })}
        {...rest}
      >
        <button
          type="button"
          {...(!disabled &&
            !readOnly && {
              onClick: () => onStepClick(stepId),
            })}
          disabled={disabled}
          className={stepButtonVariant({
            // Shouldn't we clarify the connection between complete/active/incomplete and use a common prop here?
            complete: progressState === 'complete',
            active: progressState === 'active',
            disabled,
            readOnly,
            size,
            orientation,
            className,
          })}
        >
          {label && <div className="block text-body-2 font-bold text-on-surface">{label}</div>}
        </button>
      </li>
    )
  }
)
