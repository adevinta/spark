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

const faqItemCtx = createContext<Context>({} as Context)

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

function useFaqItemContext() {
  const ctx = useContext(faqItemCtx)

  if (!ctx) {
    throw Error('useFaqItemContext must be used within the appropriate Provider')
  }

  return ctx
}

function ItemProvider({ children }: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <faqItemCtx.Provider value={{ state, dispatch }}>{children}</faqItemCtx.Provider>
}

export { useFaqItemContext, ItemProvider }
