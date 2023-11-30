import { type ReactNode, useEffect, useId } from 'react'

import { useProgressTrackerContext, useProgressTrackerDispatch } from './ProgressTrackerContext'

interface Props {
  complete: ReactNode
  incomplete: ReactNode
  active: ReactNode
}

export function ProgressTrackerStep(_props: Props) {
  const id = useId()
  const { activeStep = -1, steps } = useProgressTrackerContext()
  const dispatch = useProgressTrackerDispatch()

  const selfIndex = steps.findIndex(index => index === id)
  const setActiveStep = () => dispatch({ type: 'SET_ACTIVE_STEP', payload: selfIndex })
  const isActive = selfIndex === activeStep && 'active'

  // const status = (() => {
  //   if (selfIndex === activeStep) return 'active'
  //   if (selfIndex < activeStep) return 'complete'

  //   return 'incomplete'
  // })()

  // const statusLookup: Record<typeof status, ReactNode> = {
  //   complete,
  //   active,
  //   incomplete,
  // }

  useEffect(() => {
    dispatch({ type: 'REGISTER_STEP', payload: id })
  }, [dispatch, id])

  return selfIndex === -1 ? null : (
    <li onClick={setActiveStep}>{isActive ? 'checked' : selfIndex + 1}</li>
  )
}

ProgressTrackerStep.displayName = 'ProgressTracker.Step'
