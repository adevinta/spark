import { PropsWithChildren } from 'react'

import { useFAQItemContext } from './context'

export function Answer({ children }: PropsWithChildren<unknown>) {
  const { state } = useFAQItemContext()

  return <dd className={`${state.isOpen ? 'block' : 'hidden'} mb-lg`}>{children}</dd>
}
