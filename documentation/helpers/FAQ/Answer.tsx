import { PropsWithChildren } from 'react'

import { useFaqItemContext } from './context'

export function Answer({ children }: PropsWithChildren<unknown>) {
  const { state } = useFaqItemContext()

  return <dd className={`${state.isOpen ? 'block' : 'hidden'} mb-lg`}>{children}</dd>
}
