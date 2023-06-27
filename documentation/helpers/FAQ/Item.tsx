import { PropsWithChildren } from 'react'

import { Provider } from './context'

export function Item({ children }: PropsWithChildren<unknown>) {
  return (
    <Provider>
      <div className="border-t-outline [&:not(:first-child)]:border-t-sm">{children}</div>
    </Provider>
  )
}
