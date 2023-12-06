import { createContext, type Dispatch, type SetStateAction, useContext } from 'react'

import type { ProgressTrackerProps } from './ProgressTracker'

interface Step {
  id: string
  disabled: boolean
}

export type ProgressTrackerContextInterface = Required<
  Pick<ProgressTrackerProps, 'stepIndex' | 'onStepClick' | 'size' | 'readOnly'>
> & {
  steps: Set<Step>
  setSteps: Dispatch<SetStateAction<Set<Step>>>
}

export const ProgressTrackerContext = createContext<ProgressTrackerContextInterface>(
  {} as ProgressTrackerContextInterface
)

export const useProgressTrackerContext = () => useContext(ProgressTrackerContext)
