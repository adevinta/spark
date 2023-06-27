import { createContext, type Dispatch, PropsWithChildren, useContext, useReducer } from 'react'

interface Action {
  type: 'TOGGLE_OPEN'
}

interface State {
  isOpen: boolean
}

interface Context {
  state: State
  dispatch: Dispatch<Action>
}

const faqCtx = createContext<Context>({} as Context)

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_OPEN': {
      return { ...state, isOpen: !state.isOpen }
    }

    default:
      return state
  }
}

const initialState: State = {
  isOpen: false,
}

function useFaqContext() {
  const ctx = useContext(faqCtx)

  if (!ctx) {
    throw Error('useFaqContext must be used within the appropriate Provider')
  }

  return ctx
}

function Provider({ children }: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <faqCtx.Provider value={{ state, dispatch }}>{children}</faqCtx.Provider>
}

export { useFaqContext, Provider }
