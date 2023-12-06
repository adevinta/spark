import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef, type PropsWithChildren, useState } from 'react'

import {
  ProgressTrackerContext,
  type ProgressTrackerContextInterface,
} from './ProgressTrackerContext'
import type { ProgressTrackerStepVariantsProps } from './ProgressTrackerStep.styles'

export interface ProgressTrackerProps
  extends ComponentPropsWithoutRef<'div'>,
    Pick<ProgressTrackerStepVariantsProps, 'size'> {
  /**
   * The index of the current step.
   * @default 0
   */
  stepIndex?: number
  /**
   * Event handler called when clicking on a step.
   */
  onStepClick?: (stepId: string) => void
  /**
   * Sets the component as interactive or not.
   * @default false
   */
  readOnly?: boolean
}

export const ProgressTracker = forwardRef<HTMLDivElement, PropsWithChildren<ProgressTrackerProps>>(
  (
    {
      stepIndex: propStepIndex = 0,
      onStepClick: onStepClickProp,
      readOnly = false,
      size = 'lg',
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const [steps, setSteps] = useState<ProgressTrackerContextInterface['steps']>(new Set())
    const [stepIndex, setStepIndex] = useState<number>(propStepIndex)

    const onStepClick = (stepId: string) => {
      const stepIndex = [...steps].findIndex(step => step.id === stepId)

      setStepIndex(stepIndex)
      onStepClickProp?.(stepId)
    }

    const Component = readOnly ? 'div' : 'nav'

    return (
      <ProgressTrackerContext.Provider
        value={{ stepIndex, onStepClick, steps, setSteps, size, readOnly }}
      >
        <Component
          ref={ref}
          aria-label="progress"
          className={cx('inline-flex', className)}
          {...rest}
        >
          <ol className="flex w-full flex-nowrap" style={{ counterReset: 'step' }}>
            {children}
          </ol>
        </Component>
      </ProgressTrackerContext.Provider>
    )
  }
)
