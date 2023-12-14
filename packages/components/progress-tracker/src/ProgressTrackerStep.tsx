import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react'

import {
  ProgressTrackerStepContext,
  type ProgressTrackerStepContextInterface,
  useProgressTrackerContext,
} from './ProgressTrackerContext'
import { stepButtonVariant, stepItemVariant } from './ProgressTrackerStep.styles'
import { ProgressTrackerStepIndicator } from './ProgressTrackerStepIndicator'

export type ProgressTrackerStepProps = ComponentPropsWithoutRef<'li'> &
  (
    | {
        disabled?: boolean
        children: ReactNode
      }
    | {
        disabled?: boolean
        'aria-label': string
      }
  )

export const ProgressTrackerStep = forwardRef<HTMLLIElement, ProgressTrackerStepProps>(
  ({ disabled = false, children, 'aria-label': ariaLabel, className, ...rest }, ref) => {
    const {
      stepIndex: activeStepIndex,
      steps,
      onStepClick,
      setSteps,
      size,
      intent,
      readOnly,
    } = useProgressTrackerContext()

    const ID = useId()
    const stepId = `step-${ID}`
    const stepIndex = [...steps.keys()].indexOf(stepId)

    const disabledAfter = useMemo(() => {
      const nextStepId = [...steps.keys()][stepIndex + 1]

      return !!(nextStepId && steps.get(nextStepId)?.includes('disabled'))
    }, [steps, stepIndex])

    const [progressState, setProgressState] =
      useState<ProgressTrackerStepContextInterface['state']>('incomplete')

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
          intent,
          disabled,
          disabledAfter,
        })}
        {...rest}
      >
        <button
          type="button"
          aria-label={ariaLabel}
          data-interactive={!disabled && !readOnly}
          title={ariaLabel}
          {...(!disabled &&
            !readOnly && {
              onClick: () => onStepClick(stepId),
            })}
          disabled={disabled}
          className={stepButtonVariant({
            size,
            readOnly,
            className,
          })}
        >
          <ProgressTrackerStepContext.Provider
            value={{
              state: progressState,
              index: stepIndex,
            }}
          >
            {children || <ProgressTrackerStepIndicator />}
          </ProgressTrackerStepContext.Provider>
        </button>
      </li>
    )
  }
)

ProgressTrackerStep.displayName = 'ProgressTracker.Step'
