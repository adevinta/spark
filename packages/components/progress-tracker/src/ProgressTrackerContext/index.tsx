import { createContext, type PropsWithChildren, useContext, useReducer } from 'react'

import { reducer } from './reducer'
import { Action, Context } from './types'

type Dispatch = React.Dispatch<Action>

const ContextState = createContext<Context>({} as Context)
const ContextDispatch = createContext<Dispatch>({} as Dispatch)

function ProgressTrackerProvider({
  value,
  children,
}: PropsWithChildren<{
  value: Partial<Context>
}>) {
  const [state, dispatch] = useReducer(reducer, {
    steps: [],
    ...value,
  })

  return (
    <ContextState.Provider value={state}>
      <ContextDispatch.Provider value={dispatch}>{children}</ContextDispatch.Provider>
    </ContextState.Provider>
  )
}

function useProgressTrackerContext(): Context {
  const state = useContext(ContextState)

  if (!state) {
    throw new Error('useProgressTrackerContext must be used within a ProgressTrackerProvider')
  }

  return state
}

function useProgressTrackerDispatch(): Dispatch {
  const dispatch = useContext(ContextDispatch)

  if (!dispatch) {
    throw new Error('useProgressTrackerDispatch must be used within a ProgressTrackerProvider')
  }

  return dispatch
}

export { useProgressTrackerContext, useProgressTrackerDispatch, ProgressTrackerProvider }
