import { createContext, type Dispatch, type SetStateAction, useContext } from 'react'

import type { ProgressTrackerProps } from './ProgressTracker'

// Main Progress Tracker
export type ProgressTrackerContextInterface = Required<
  Pick<
    ProgressTrackerProps,
    'stepIndex' | 'onStepClick' | 'size' | 'intent' | 'design' | 'readOnly'
  >
> & {
  steps: Map<string, string[]>
  setSteps: Dispatch<SetStateAction<Map<string, string[]>>>
}

export const ProgressTrackerContext = createContext<ProgressTrackerContextInterface>(
  {} as ProgressTrackerContextInterface
)

export const useProgressTrackerContext = () => useContext(ProgressTrackerContext)

// Progress Step
export interface ProgressTrackerStepContextInterface {
  index: number
  state: 'active' | 'complete' | 'incomplete'
}

export const ProgressTrackerStepContext = createContext<ProgressTrackerStepContextInterface>(
  {} as ProgressTrackerStepContextInterface
)

export const useProgressTrackerStepContext = () => useContext(ProgressTrackerStepContext)
