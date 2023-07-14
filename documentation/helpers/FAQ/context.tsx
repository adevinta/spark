import { createContext, type Dispatch, ReactNode, useContext, useReducer } from 'react'

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

interface ItemProviderProps {
  children: ReactNode | ((value: boolean) => ReactNode)
}

function ItemProvider({ children }: ItemProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const content = typeof children === 'function' ? children(state.isOpen) : children

  return <FAQItemContext.Provider value={{ state, dispatch }}>{content}</FAQItemContext.Provider>
}

export { useFAQItemContext, ItemProvider }
