interface Context {
  steps: string[]
  activeStep?: number
}

type Action =
  | { type: 'REGISTER_STEP'; payload: string }
  | { type: 'SET_ACTIVE_STEP'; payload: number }

export type { Context, Action }
