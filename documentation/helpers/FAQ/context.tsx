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

const FAQItemContext = createContext<Context>({} as Context)

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

function useFAQItemContext() {
  const ctx = useContext(FAQItemContext)

  if (!ctx) {
    throw Error('useFaqItemContext must be used within the appropriate Provider')
  }

  return ctx
}

function ItemProvider({ children }: PropsWithChildren<unknown>) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <FAQItemContext.Provider value={{ state, dispatch }}>{children}</FAQItemContext.Provider>
}

export { useFAQItemContext, ItemProvider }
