import { createContext, type Dispatch, type SetStateAction, useContext } from 'react'

import type { ProgressTrackerProps } from './ProgressTracker'

export type ProgressTrackerContextInterface = Required<
  Pick<ProgressTrackerProps, 'stepIndex' | 'onStepClick'>
> & {
  steps: Set<string>
  setSteps: Dispatch<SetStateAction<Set<string>>>
}

export const ProgressTrackerContext = createContext<ProgressTrackerContextInterface>(
  {} as ProgressTrackerContextInterface
)

export const useProgressTrackerContext = () => useContext(ProgressTrackerContext)
