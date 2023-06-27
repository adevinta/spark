import { PropsWithChildren } from 'react'

import { useFaqContext } from './context'

export function Answer({ children }: PropsWithChildren<unknown>) {
  const { state } = useFaqContext()

  return <dd className={`${state.isOpen ? 'block' : 'hidden'} mb-lg`}>{children}</dd>
}
