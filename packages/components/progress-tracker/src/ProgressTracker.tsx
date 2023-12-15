import { cx } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef, type PropsWithChildren, useState } from 'react'

import { progressList } from './ProgressTracker.styles'
import {
  ProgressTrackerContext,
  type ProgressTrackerContextInterface,
} from './ProgressTrackerContext'
import type { StepIndicatorVariantProps } from './ProgressTrackerStepIndicator.styles'

export interface ProgressTrackerProps
  extends ComponentPropsWithoutRef<'div'>,
    Pick<StepIndicatorVariantProps, 'size' | 'intent' | 'design'> {
  /**
   * The orientation of the progress tracker
   * @default 'horizontal"
   */
  orientation?: 'horizontal' | 'vertical'
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
      intent = 'basic',
      size = 'lg',
      design = 'outline',
      orientation = 'horizontal',
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const [steps, setSteps] = useState<ProgressTrackerContextInterface['steps']>(new Map())
    const [stepIndex, setStepIndex] = useState<number>(propStepIndex)

    const onStepClick = (stepId: string) => {
      const stepIndex = [...steps.keys()].indexOf(stepId)

      setStepIndex(stepIndex)
      onStepClickProp?.(stepId)
    }

    const Component = readOnly ? 'div' : 'nav'

    return (
      <ProgressTrackerContext.Provider
        value={{ stepIndex, onStepClick, steps, setSteps, size, intent, design, readOnly }}
      >
        <Component
          ref={ref}
          data-spark-component="progress-tracker"
          className={cx('inline-flex', className)}
          {...rest}
        >
          <ol
            data-orientation={orientation}
            className={progressList}
            style={{ counterReset: 'step' }}
          >
            {children}
          </ol>
        </Component>
      </ProgressTrackerContext.Provider>
    )
  }
)
