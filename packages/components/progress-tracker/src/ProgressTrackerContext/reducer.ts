import type { Action, Context } from './types'

export function reducer(state: Context, action: Action): Context {
  switch (action.type) {
    case 'REGISTER_STEP':
      return {
        ...state,
        steps: Array.from(new Set([...state.steps, action.payload])),
      }
    case 'SET_ACTIVE_STEP':
      return {
        ...state,
        activeStep: action.payload,
      }

    default:
      return state
  }
}
