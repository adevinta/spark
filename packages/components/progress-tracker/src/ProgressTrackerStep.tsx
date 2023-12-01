import { type ComponentPropsWithoutRef, forwardRef, useEffect, useId, useState } from 'react'

import { useProgressTrackerContext } from './ProgressTrackerContext'
import { stepButtonVariant, stepWrapperVariant } from './ProgressTrackerStep.styles'

export type ProgressTrackerStepProps = ComponentPropsWithoutRef<'li'> & {
  label?: string
}

export const ProgressTrackerStep = forwardRef<HTMLLIElement, ProgressTrackerStepProps>(
  ({ label, className, ...rest }, ref) => {
    const { stepIndex: activeStepIndex, steps, onStepClick, setSteps } = useProgressTrackerContext()

    const ID = useId()
    const stepId = `step-${ID}`

    const [isActive, setIsActive] = useState(false)

    useEffect(() => setSteps(steps => steps.add(stepId)), [])

    useEffect(
      () => setIsActive([...steps].indexOf(stepId) === activeStepIndex),
      [activeStepIndex, steps, stepId]
    )

    return (
      <li id={stepId} ref={ref} {...rest} className={stepWrapperVariant()}>
        <button
          type="button"
          onClick={() => onStepClick(stepId)}
          className={stepButtonVariant({ active: isActive, className })}
        >
          {label && <span className="block text-body-2 font-bold text-on-surface">{label}</span>}
        </button>
      </li>
    )
  }
)
