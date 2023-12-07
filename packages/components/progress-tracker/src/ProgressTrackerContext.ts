import { createContext, type Dispatch, type SetStateAction, useContext } from 'react'

import type { ProgressTrackerProps } from './ProgressTracker'

export type ProgressTrackerContextInterface = Required<
  Pick<ProgressTrackerProps, 'stepIndex' | 'onStepClick' | 'size' | 'orientation' | 'readOnly'>
> & {
  steps: Map<string, string[]>
  setSteps: Dispatch<SetStateAction<Map<string, string[]>>>
}

export const ProgressTrackerContext = createContext<ProgressTrackerContextInterface>(
  {} as ProgressTrackerContextInterface
)

export const useProgressTrackerContext = () => useContext(ProgressTrackerContext)
