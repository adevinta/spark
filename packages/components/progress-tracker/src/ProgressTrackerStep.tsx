import { type ComponentPropsWithoutRef, forwardRef, type ReactNode, useEffect, useId } from 'react'

import { ProgressTrackerStepContext, useProgressTrackerContext } from './ProgressTrackerContext'
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
      stepIndex: currentStepIndex,
      steps,
      onStepClick,
      setSteps,
      size,
      readOnly,
    } = useProgressTrackerContext()

    const ID = useId()
    const stepId = `step-${ID}`
    const stepIndex = [...steps.keys()].indexOf(stepId)

    const disabledAfter = (() => {
      const nextStepId = [...steps.keys()][stepIndex + 1]

      return !!(nextStepId && steps.get(nextStepId)?.includes('disabled'))
    })()

    const progressState = (() => {
      if (stepIndex === currentStepIndex) return 'active'
      else if (stepIndex < currentStepIndex) return 'complete'
      else return 'incomplete'
    })()

    useEffect(() => {
      setSteps(steps => {
        const newSteps = new Map(steps)

        return newSteps.set(
          stepId,
          [progressState, disabled ? 'disabled' : ''].filter(v => !!v)
        )
      })

      return () => {
        setSteps(steps => {
          steps.delete(stepId)

          return steps
        })
      }
    }, [disabled, stepId, setSteps, progressState])

    return (
      <li
        id={stepId}
        ref={ref}
        data-state={progressState}
        {...(progressState === 'active' && {
          'aria-current': 'step',
        })}
        className={stepItemVariant({
          size,
          disabled,
          disabledAfter,
        })}
        {...rest}
      >
        <button
          type="button"
          aria-label={ariaLabel}
          data-interactive={!disabled && !readOnly}
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
              size,
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
